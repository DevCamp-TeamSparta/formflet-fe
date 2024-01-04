import Button from '@/components/basic/Button';
import MESSAGE from '@/constants/Messages';
import { SetStateBoolean } from '@/types/type';

export default function VerifyEmailTable({ setStateBoolean }: SetStateBoolean) {
  const handleOnClick = () => {
    alert('준비중입니다.');
    return;
    const email = document.querySelector<HTMLInputElement>('input[id="email]')?.value;
    if (email) {
      setStateBoolean(true);
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
    </div>
  );
}
