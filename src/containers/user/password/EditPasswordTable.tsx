import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import MESSAGE from '@/constants/Messages';
import PATH from '@/constants/path/Path';
import userPasswordReset from '@/services/api/users/userPasswordReset';

interface EditPasswordProps {
  email: string;
  isSuccessVerify: boolean;
}

export default function EditPasswordTable({ email, isSuccessVerify }: EditPasswordProps) {
  const route = useRouter();
  const handleEditPassword = async () => {
    const currentEmail = document.querySelector<HTMLInputElement>('input[id="email"]')?.value;
    const password = document.querySelector<HTMLInputElement>('input[id="password"]')?.value;
    const checkPassword = document.querySelector<HTMLInputElement>('input[id="checkPassword"]')
      ?.value;

    if (email === currentEmail && isSuccessVerify && checkPassword === password) {
      const data = {
        email,
        password,
      };
      await userPasswordReset(data).then(() => {
        route.push(PATH.ROUTE.LOGIN);
      });
    } else {
      alert('이메일 또는 비밀번호를 다시 확인해주세요.');
    }
  };
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex flex-col justify-center items-start gap-2.5">
        <label className="b1-bold text-gray-dark-active" htmlFor="password">
          비밀번호
        </label>
        <input
          className="flex w-[504px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
          id="password"
          type="password"
          autoComplete="off"
          placeholder={MESSAGE.JOIN_LOGIN.inputPassword}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <div className="flex flex-col items-start gap-2.5">
          <label className="b1-bold text-gray-dark-active" htmlFor="checkPassword">
            비밀번호 확인
          </label>
          <input
            className="flex w-[504px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
            id="checkPassword"
            type="password"
            placeholder={MESSAGE.JOIN_LOGIN.inputcheckPassword}
          />
        </div>
      </div>
      <Button
        className="flex bg-purple-normal-normal box-shadow-normal w-[502px] h-14 justify-center items-center rounded-lg"
        id="btn-edit-password"
        type="submit"
        onClick={handleEditPassword}
      >
        <p className="text-white b1-bold">비밀번호 재설정</p>
      </Button>
    </div>
  );
}
