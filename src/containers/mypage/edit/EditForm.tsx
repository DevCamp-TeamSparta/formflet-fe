'use client';

import { ChangeEvent, useRef } from 'react';
import { useFormStore } from '../store';

export default function EditForm() {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { form, setForm } = useFormStore((state) => state);

  const handleForm = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-5 flex-[1_0_0] self-stretch border border-gray-light-active box-shadow-normal p-[30px] rounded-[8px_0px_0px_8px] border-solid">
      <textarea
        className="flex resize-none w-full h-full items-start gap-2.5 flex-[1_0_0] self-stretch border border-gray-normal-normal box-shadow-normal px-[30px] py-5 rounded-lg border-solid"
        value={form}
        onChange={(e) => handleForm(e)}
        ref={contentRef}
      />
    </div>
  );
}
