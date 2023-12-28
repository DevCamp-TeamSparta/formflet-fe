'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/basic/Button';
import { loginFormSchema, LoginFormSchema } from '@/types/type';
import authLogin from '@/services/api/auth/authLogin';
import PATH from '@/constants/path/Path';
import InputGroupArrays from '@/constants/inputProps/InputGroupArrays';
import LoginInputGroup from '@/components/template/LoginInputGroup';
import { useAuthStore } from '@/store/store';
import Instance from '@/services/api/Instance';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const route = useRouter();
  const { LOGIN_GROUP_PROPS } = InputGroupArrays();
  const { setAccessToken } = useAuthStore((state) => ({ setAccessToken: state.setAccessToken }));

  const loginFormSubmit: SubmitHandler<LoginFormSchema> = async (
    data: LoginFormSchema,
  ): Promise<void> => {
    // API 구현;

    await authLogin(data)
      .then((response) => {
        const { accessToken } = response.data.data;
        setAccessToken(accessToken);

        Instance.defaults.headers.common.authorization = `Bearer ${accessToken}`;
      })
      .then(() => {
        route.push(PATH.ROUTE.MYPAGE);
      });

    // TODO: res에 받아온 값에 따라 이메일이랑 비밀번호가 다른지, 이메일이 존재하는지 확인 후 라우팅
  };

  return (
    <main className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(loginFormSubmit)}>
        <div className="flex flex-col items-center gap-2.5 mb-5">
          <p className="t1-bold text-purple-normal-normal">폼플렛</p>
          <p className="h2-bold text-gray-dark-active">노션으로 쉽게 만드는 온라인 전단지</p>
        </div>
        {LOGIN_GROUP_PROPS.map((field) => (
          <LoginInputGroup
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            errorMessage={errors[field.id]?.message}
            errors={errors}
            placeholder={field.placeholder}
            {...register(field.id)}
          />
        ))}
        {/* <Link href={PATH.ROUTE.EDIT_PASSWORD}>비밀번호 재설정</Link> */}
        <Button
          className="flex bg-purple-normal-normal box-shadow-normal w-[502px] h-14 justify-center items-center rounded-lg"
          id="btn-login"
          type="submit"
        >
          <p className="text-white b1-bold">로그인</p>
        </Button>
        <hr className="flex items-center self-stretch justify-center h-0 text-gray-light-active " />
        <Link
          className="flex w-[502px] h-14 justify-center items-center border border-purple-normal-normal box-shadow-normal rounded-lg"
          href={PATH.ROUTE.JOIN}
        >
          <p className="b1-bold text-purple-normal-normal">회원가입</p>
        </Link>
      </form>
    </main>
  );
}
