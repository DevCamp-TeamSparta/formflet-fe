import { useState } from 'react';
import Button from '@/components/basic/Button';
import MESSAGE from '@/constants/Messages';
import userVerifyCode from '@/services/api/users/userVerifyCode';
import userPasswordVerifyEmail from '@/services/api/users/userPasswordVerifyEmail';

interface VerifyEmailProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  email: string;
  setIsSuccessVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VerifyEmailTable({
  onChange,
  email,
  setIsSuccessVerify,
}: VerifyEmailProps) {
  const [isSend, setIsSend] = useState(false);
  const handleOnClick = async () => {
    if (email) {
      await userPasswordVerifyEmail(email)
        .then(() => setIsSend(true))
        .catch(() => alert('메일 전송을 실패하셨습니다!'));
    }
  };

  const isVaildCode = async () => {
    const code = document.querySelector<HTMLInputElement>('input[id="code"]')?.value;

    const data = {
      email,
      code: Number(code),
    };
    if (code) {
      await userVerifyCode(data)
        .then(() => {
          setIsSuccessVerify(true);
        })
        .catch();
    }
  };

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="flex flex-col justify-center items-start gap-2.5">
        <label className="b1-bold text-gray-dark-active" htmlFor="email">
          이메일 아이디
        </label>
        <input
          className="flex w-[504px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
          id="email"
          type="text"
          onChange={(e) => onChange(e)}
          placeholder={MESSAGE.JOIN_LOGIN.inputEmail}
        />
      </div>
      <Button
        className="flex bg-purple-normal-normal box-shadow-normal w-[502px] h-14 justify-center items-center rounded-lg"
        id="btn-password-code"
        type="submit"
        onClick={handleOnClick}
      >
        <p className="text-white b1-bold">비밀번호 재설정 메일 보내기</p>
      </Button>
      {isSend && (
        <div className="flex justify-between items-end gap-2.5">
          <input
            className="flex w-[334px] h-14 items-center px-8 py-4 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal placeholder:text-gray-light-active text-gray-dark-hover rounded-lg"
            id="code"
            type="text"
            autoComplete="off"
          />
          <Button
            className="flex w-40 h-14 justify-center items-center px-2 py-4 shrink-0 bg-purple-normal-normal box-shadow-normal rounded-lg gap-1.5"
            id="btn-checkEmail"
            type="button"
            onClick={() => isVaildCode()}
          >
            <p className="text-white b1-bold">인증 확인</p>
          </Button>
        </div>
      )}
    </div>
  );
}
