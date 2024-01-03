'use client';

import { ChangeEvent, useRef } from 'react';
import { useFormStore } from '@/store/store';
import useModalStore from '@/store/modalStore';
import FormEditModal from '@/components/modal/edit/FormEditModal';

export default function EditForm() {
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { form, replyStatus, createForm, setForm } = useFormStore((state) => ({
    form: state.form,
    replyStatus: state.replyStatus,
    createForm: state.createForm,
    setForm: state.setForm,
  }));
  const { setModal } = useModalStore();

  const handleForm = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm(e.target.value);
  };

  const handleCreateForm = () => {
    if (replyStatus && !createForm) {
      setModal(<FormEditModal />);
    }
  };
  return (
    <textarea
      className="flex w-full h-full flex-col resize-none items-start gap-5 flex-[1_0_0] self-stretch border border-gray-light-active focus:border-purple-normal-normal box-shadow-normal p-[30px] rounded-lg border-solid"
      value={form}
      onChange={(e) => handleForm(e)}
      onClick={handleCreateForm}
      ref={contentRef}
    />
  );
}
