'use client';

import Button from '@/components/basic/Button';
import { useDomainStore } from '@/store/store';
import PlusCircle from '../../../../public/svg/PlusCircle';
import formReply from '@/services/api/forms/formReply';

interface FormProps {
  form: string;
}

export default function EditFormView({ form }: FormProps) {
  const domain = useDomainStore((state) => state.domain);
  const formSplit = form.split('\n');
  let count = 0;

  const handleRadio = (text: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return (
        <div key={text + value}>
          <input type="radio" name={`answer${count}`} value={value} />
          <span>{value}</span>
        </div>
      );
    });
    return item;
  };
  const handleCheckbox = (text: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return (
        <div key={text + value}>
          <input type="checkbox" name={`answer${count}`} value={value} />
          <span>{value}</span>
        </div>
      );
    });
    return item;
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
        return <p className="h3-bold text-gray-dark-active">Q. {content}*</p>;

      // Answer
      case '[주관식]':
        count += 1;
        return (
          <input
            type="text"
            className="flex w-[450px] h-10 items-center gap-2.5 shrink-0 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid"
            placeholder={content}
            name={`answer${count}`}
          />
        );
      case '[객관식]':
        count += 1;
        return handleRadio(content);
      case '[객관식_복수]':
        count += 1;
        return handleCheckbox(content);

      // Text
      case '[텍스트]':
        return <p className="b1 self-stretch text-gray-dark-active">{content}</p>;
      case '[제목]':
        return <p className="h1-bold text-gray-dark-active">{content}</p>;
      default:
        return <p className="b1-bold text-gray-dark-active">{content}</p>;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await formReply(domain, formData);
    if (response.status === 200) {
      alert('성공!');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-5 flex-[1_0_0] self-stretch border border-gray-light-active box-shadow-normal p-[30px] rounded-[0px_8px_8px_0px] border-solid"
    >
      {formSplit.map((item) => {
        const content = handleForm(item);
        return <div key={item}>{content}</div>;
      })}
      <Button
        type="submit"
        className="flex h-10 items-center gap-2.5 box-shadow-normal bg-gray-darker px-5 py-4 rounded-lg"
      >
        <p className="b1-bold text-white">제출하기</p>
        <PlusCircle color="white" />
      </Button>
    </form>
  );
}
