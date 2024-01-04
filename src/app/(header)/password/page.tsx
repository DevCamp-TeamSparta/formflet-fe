'use client';

// import { useState } from 'react';
import Button from '@/components/basic/Button';
import MESSAGE from '@/constants/Messages';

export default function Password() {
  // const [isMailSent, setIsMailSent] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center gap-2.5 flex-[1_0_0] self-stretch px-[365px] py-0">
      <div className="flex w-[502px] flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <p className="t1-bold text-purple-normal-normal">폼플렛</p>
          <p className="h2-bold text-gray-dark-active">비밀번호 재설정</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2.5">
          <label className="b1-bold text-gray-dark-active" htmlFor="email">
            이메일 아이디
          </label>
          <input
            className="flex w-[504px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
            id="email"
            type="text"
            placeholder={MESSAGE.JOIN_LOGIN.inputEmail}
          />
        </div>
        <Button
          className="flex bg-purple-normal-normal box-shadow-normal w-[502px] h-14 justify-center items-center rounded-lg"
          id="btn-login"
          type="submit"
        >
          <p className="text-white b1-bold">로그인</p>
        </Button>
      </div>
    </div>
  );
}
