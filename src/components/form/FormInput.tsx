'use client';

import clsx from 'clsx';

interface FormInputProps {
  content: string;
  count: number;
  formId: number;
}

export default function FormInput({ content, count, formId }: FormInputProps) {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = '40px'; // 높이를 초기화
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // 콘텐츠 높이에 맞게 조정
  };

  return (
    <textarea
      className={clsx(
        'appearance-none resize-none overflow-hidden border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal px-5 py-2 rounded-lg',
        formId === 0 ? 'w-[417px]' : 'w-[80vw]',
      )}
      placeholder={content}
      name={`answer${count}`}
      onInput={(e) => handleInput(e)}
      style={{ height: '40px' }}
    />
  );
}
