'use client';

import { ChangeEvent, useRef } from 'react';
import { useFormStore } from '@/store/store';

export default function EditForm() {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { form, setForm } = useFormStore((state) => state);

  const handleForm = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  return (
    <textarea
      className="flex w-full h-full flex-col resize-none items-start gap-5 flex-[1_0_0] self-stretch border border-gray-light-active focus:border-purple-normal-normal box-shadow-normal focus:box-inner-shadow-normal p-[30px] rounded-lg border-solid"
      value={form}
      onChange={(e) => handleForm(e)}
      ref={contentRef}
    />
  );
}
