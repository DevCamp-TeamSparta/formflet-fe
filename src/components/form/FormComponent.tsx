'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import formReply from '@/services/api/forms/formReply';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';
import FormRadio from './FormRadio';
import FormCheckbox from './FormCheckbox';

interface FormProps {
  formId: number;
  form: string;
}

export default function FormComponent(props: FormProps) {
  const route = useRouter();
  const { form, formId } = props;
  const formSplit = form.split('\n');
  let count = 0;
  let isRequired = false;

  const handleRadio = (text: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return <FormRadio key={value} value={value} count={count} isRequired={isRequired} />;
    });
    isRequired = false;
    return <div className="flex flex-col gap-2.5">{item}</div>;
  };

  const handleCheckbox = (text: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return <FormCheckbox key={value} value={value} count={count} isRequired={isRequired} />;
    });
    isRequired = false;
    return <div className="flex flex-col gap-2.5">{item}</div>;
  };

  const handleForm = (text: string) => {
    const space = text.indexOf(' ');
    const command = text.substring(0, space);
    const content = text.substring(space + 1);

    switch (command) {
      // Question
      case '[질문]':
        return <p className="h3-bold text-gray-dark-active">Q. {content}</p>;
      case '[질문_*]':
        isRequired = true;
        return <p className="h3-bold text-gray-dark-active">Q. {content}*</p>;

      // Answer
      case '[주관식]':
        count += 1;
        return (
          <label>
            <input
              type="text"
              className="appearance-none flex w-[677px] h-10 items-center gap-2.5 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-inner-shadow-normal px-5 py-4 rounded-lg border-solid"
              placeholder={content}
              name={`answer${count}`}
              required={isRequired}
            />
          </label>
        );
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5 p-[30px]">
      {formSplit.map((item) => {
        const content = handleForm(item);
        return <div key={item}>{content}</div>;
      })}
      <Button
        type="submit"
        className="flex h-10 items-center gap-2.5 box-shadow-normal bg-gray-darker px-5 py-4 rounded-lg"
      >
        <p className="text-white b1-bold">제출하기</p>
        <ArrowRightCircle color="white" />
      </Button>
    </form>
  );
}
