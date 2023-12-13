'use client';

import { ChangeEvent, useRef } from 'react';
import { useFormStore } from '../store';

export default function EditForm() {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { form, setForm } = useFormStore((state) => state);

  const handleForm = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
    console.log(form);
  };

  return (
    <textarea
      className="flex resize-x w-full h-full items-start gap-2.5 flex-[1_0_0] self-stretch border border-[color:var(--grey-normal-normal,#9FA0A0)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10)] px-[30px] py-5 rounded-lg border-solid"
      value={form}
      onChange={(e) => handleForm(e)}
      ref={contentRef}
    />
  );
}
