'use client';

import { useState } from 'react';
import VerifyEmailTable from './VerifyEmailTable';
import EditPasswordTable from './EditPasswordTable';

export default function PasswordContainer() {
  const [isSuccessVerify, setIsSuccessVerify] = useState(false);
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2.5 flex-[1_0_0] self-stretch px-[365px] py-0">
      <div className="flex w-[502px] flex-col items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <p className="t1-bold text-purple-normal-normal">폼플렛</p>
          <p className="h2-bold text-gray-dark-active">비밀번호 재설정</p>
        </div>
        <VerifyEmailTable
          onChange={onChangeEmail}
          email={email}
          setIsSuccessVerify={setIsSuccessVerify}
        />
        {isSuccessVerify && <EditPasswordTable email={email} isSuccessVerify={isSuccessVerify} />}
      </div>
    </div>
  );
}
