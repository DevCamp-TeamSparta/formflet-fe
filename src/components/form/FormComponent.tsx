'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import Button from '@/components/basic/Button';
import formReply from '@/services/api/forms/formReply';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';
import FormInput from './FormInput';
import FormRadio from './FormRadio';
import FormCheckbox from './FormCheckbox';
import MadeLogo from '../MadeLogo';
import checkPlatform from '@/utils/checkPlatform';

const checkRequired = () => {
  let isChecked = true;
  const submitForm = document.querySelector('#submit-form');
  if (submitForm) {
    const requiredGroups = submitForm.querySelectorAll<HTMLFormElement>('div[id$="-required"]');

    requiredGroups.forEach((group) => {
      const textFieldInputs = group.querySelectorAll<HTMLInputElement>('textarea');
      const checkFieldInputs = group.querySelectorAll<HTMLInputElement>(
        'input[type="radio"], input[type="checkbox"]',
      );

      if (textFieldInputs.length !== 0) {
        textFieldInputs.forEach((items) => {
          if (!items.value) {
            isChecked = false;
          }
        });
      }

      if (checkFieldInputs.length !== 0) {
        if (!Array.from(checkFieldInputs).some((input) => input.checked)) {
          isChecked = false;
        }
      }
    });
  }

  return isChecked;
};

interface FormProps {
  formId: number;
  form: string;
}

export default function FormComponent({ formId, form }: FormProps) {
  const route = useRouter();
  const formSplit = form.split('\n');
  let count = 0;
  let isRequired = false;
  const [selectedRadio, setSelectedRadio] = useState(new Map<number, string>());
  const [userPlatForm, setUserPlatForm] = useState<'pc' | 'mobile'>('pc');

  const handleRadioChange = (cnt: number, value: string) => {
    setSelectedRadio(new Map(selectedRadio.set(cnt, value)));
  };

  const handleInput = (content: string) => {
    return (
      <div id={clsx(`textarea-${count}`, { '-required': isRequired })}>
        <FormInput content={content} count={count} userPlatForm={userPlatForm} />
      </div>
    );
  };

  const handleRadio = (content: string) => {
    const items = content.split('_');

    const item = items.map((value) => {
      return (
        <FormRadio
          key={value}
          value={value}
          count={count}
          selectedRadio={selectedRadio}
          onRadioChange={handleRadioChange}
          userPlatForm={userPlatForm}
        />
      );
    });

    return (
      <div
        id={clsx(`radio-${count}`, { '-required': isRequired })}
        className="flex flex-col gap-2.5"
      >
        {item}
      </div>
    );
  };

  const handleCheckbox = (content: string) => {
    const items = content.split('_');
    const item = items.map((value) => {
      return <FormCheckbox key={value} value={value} count={count} userPlatForm={userPlatForm} />;
    });

    return (
      <div
        id={clsx(`checkbox-${count}`, { '-required': isRequired })}
        className="flex flex-col gap-2.5"
      >
        {item}
      </div>
    );
  };

  const handleForm = (text: string) => {
    const space = text.indexOf(' ');
    const command = text.substring(0, space);
    const content = text.substring(space + 1);

    if (command === '[질문]' || command === '[질문_*]') {
      isRequired = command === '[질문_*]';
    }

    switch (command) {
      // Question
      case '[질문]':
        return <p className="h3-bold text-gray-dark-active">Q. {content}</p>;
      case '[질문_*]':
        return <p className="h3-bold text-gray-dark-active">Q. {content} *</p>;

      // Answer
      case '[주관식]':
        count += 1;
        return handleInput(content);
      case '[객관식]':
        count += 1;
        return handleRadio(content);
      case '[객관식_복수]':
        count += 1;
        return handleCheckbox(content);

      // Text
      case '[텍스트]':
        return <p className="self-stretch b1 text-gray-dark-active">{content}</p>;
      case '[제목]':
        return <p className="h1-bold text-gray-dark-active">{content}</p>;
      default:
        return <p className="b1-bold text-gray-dark-active">{content}</p>;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formId) {
      if (!checkRequired()) {
        return;
      }

      const formData = new FormData(event.currentTarget);
      const submitData: Array<FormDataEntryValue[]> = [];
      for (let i = 1; i <= count; i += 1) {
        const getData = formData.getAll(`answer${i}`);
        submitData.push(getData);
      }
      const response = await formReply(formId, submitData);
      if (response.status === 201) {
        route.push('/submit');
      }
    }
  };

  useEffect(() => {
    setUserPlatForm(checkPlatform());
  }, []);

  return (
    <form
      id="submit-form"
      onSubmit={handleSubmit}
      className="relative flex flex-col items-start gap-5"
    >
      {formSplit.map((item) => {
        const content = handleForm(item);
        return (
          <div key={item} className="flex w-full">
            {content}
          </div>
        );
      })}
      <Button
        type="submit"
        className="flex h-10 items-center gap-2.5 box-shadow-normal bg-gray-darker px-5 py-4 rounded-lg"
      >
        <p className="text-white b1-bold whitespace-nowrap">제출하기</p>
        <ArrowRightCircle color="white" />
      </Button>
      <MadeLogo />
    </form>
  );
}
