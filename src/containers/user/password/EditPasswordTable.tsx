import Button from '@/components/basic/Button';
import Input from '@/components/basic/Input';
import MESSAGE from '@/constants/Messages';
import { SetStateBoolean } from '@/types/type';

export default function EditPasswordTable({ setStateBoolean }: SetStateBoolean) {
  const handleEditPassword = () => {
    setStateBoolean(false);
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
          <Input
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
