'use client';

import Button from '@/components/basic/Button';
import { useFormStore } from '../store';
import PlusCircle from '../../../../public/svg/PlusCircle';

export default function EditPreView() {
  const form = useFormStore((state) => state.form);
  return (
    <form>
      <p>{form}</p>
      <Button className="flex h-10 items-center gap-2.5 box-shadow-normal bg-darker px-5 py-4 rounded-lg">
        <p className="b1-bold text-white">추가하기</p>
        <PlusCircle color="white" />
      </Button>
    </form>
  );
}
