'use client';

import Button from '@/components/basic/Button';
import { useFormStore } from '../store';
import PlusCircle from '../../../../public/svg/PlusCircle';

export default function EditPreView() {
  const form = useFormStore((state) => state.form);
  const formSplit = form.split('\n');

  const handleRadio = (text: string, idx: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return (
        <div key={text + idx}>
          <input id={value} type="radio" name={idx} value={value} />
          <span>{value}</span>
        </div>
      );
    });
    return item;
  };
  const handleCheckbox = (text: string, idx: string) => {
    const items = text.split('_');
    const item = items.map((value) => {
      return (
        <div key={text + idx}>
          <input type="checkbox" name={idx} value={value} />
          <span>{value}</span>
        </div>
      );
    });
    return item;
  };

  const handleForm = (text: string, idx: string) => {
    const space = text.indexOf(' ');
    let command = text.substring(0, space);
    const content = text.substring(space + 1);

    if (text === '[주관식]') command = '[주관식]';

    switch (command) {
      // Question
      case '[질문]':
        return <p className="h3-bold text-gray-dark-active">Q. {content}</p>;
      case '[질문_*]':
        return <p className="h3-bold text-gray-dark-active">Q. {content}*</p>;

      // Answer
      case '[주관식]':
        return (
          <input className="flex w-[450px] h-10 items-center gap-2.5 shrink-0 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid" />
        );
      case '[객관식]':
        return handleRadio(content, idx);
      case '[객관식_복수]':
        return handleCheckbox(content, idx);

      // Text
      case '[텍스트]':
        return <p className="b1 self-stretch text-gray-dark-active">{content}</p>;
      case '[제목]':
        return <p className="h1-bold text-gray-dark-active">{content}</p>;
      default:
        return <p className="b1-bold text-gray-dark-active">{content}</p>;
    }
  };

  return (
    <form className="flex flex-col items-start gap-5 flex-[1_0_0] self-stretch border border-gray-light-active box-shadow-normal p-[30px] rounded-[0px_8px_8px_0px] border-solid">
      {formSplit.map((item, idx) => {
        const content = handleForm(item, idx as unknown as string);
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
