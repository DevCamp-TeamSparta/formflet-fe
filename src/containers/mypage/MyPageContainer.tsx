'use client';

import { useState } from 'react';
import PageList from './PageList';
import RegisterPage from './RegisterPage';
import Button from '@/components/basic/Button';
import PlusCircle from '../../../public/svg/PlusCircle';

export default function MyPageContainer() {
  const [openRegisterForm, SetOpenRegisterForm] = useState(false);
  const [isVisibled, setIsVisibled] = useState('visible');

  const handleOpenForm = () => {
    SetOpenRegisterForm(!openRegisterForm);
    setIsVisibled('hidden');
  };
  return (
    <div className="flex flex-col items-center gap-5 px-[87px] py-10">
      <Button
        className={`flex w-[850px] h-[108px] justify-center items-center box-shadow-normal bg-gray-light-normal border border-gray-light-active px-8 py-4 rounded-lg border-solid visiblity: ${isVisibled}`}
        onClick={() => handleOpenForm()}
      >
        <PlusCircle />
      </Button>
      {openRegisterForm && <RegisterPage />}
      <PageList setIsVisibled={setIsVisibled} />
    </div>
  );
}
