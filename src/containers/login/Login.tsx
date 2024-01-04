'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import Button from '@/components/basic/Button';
import { loginFormSchema, LoginFormSchema } from '@/types/type';
import authLogin from '@/services/api/auth/authLogin';
import PATH from '@/constants/path/Path';
import Instance from '@/services/api/Instance';
import authReissue from '@/services/api/auth/authReissue';
import MESSAGE from '@/constants/Messages';
import Input from '@/components/basic/Input';
import JWT_EXPIRY_TIME from '@/constants/consts';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const route = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  function onLoginSuccess(accessToken: string) {
    Instance.defaults.headers.common.authorization = `Bearer ${accessToken}`;
    localStorage.setItem('accessToken', accessToken);
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000); // 만료 1분 전에 재발급 함수
  }

  async function onSilentRefresh() {
    const cookies = new Cookies();
    const refreshToken = cookies.get('refresh-token');
    if (refreshToken) {
      try {
        const response = await authReissue();
        onLoginSuccess(response.data.data.accessToken);
      } catch (e) {
        alert('재로그인 실패!');
        route.push(PATH.ROUTE.LOGIN);
      }
    }
  }

  /**
   * 로그인 실패시 에러 출력
   * 성공 시 Access Token은 localStorage, Refresh Token은 쿠키에 저장한다.
   * 로그인 정보가 필요한 instance의 헤더에 access token을 authorization에 defualt 값으로 저장한다.
   * Access Token이 만료 시간이 되기 전에 refresh token이 있을 경우 Silent Refresh 로직을 실행하여 사용자의 로그인이 유지되도록 한다.
   * @param data email, password
   */
  const loginFormSubmit: SubmitHandler<LoginFormSchema> = async (
    data: LoginFormSchema,
  ): Promise<void> => {
    await authLogin(data)
      .then((response) => {
        const { accessToken } = response.data.data;

        onLoginSuccess(accessToken);
      })
      .then(() => {
        route.push(PATH.ROUTE.MYPAGE);
      })
      .catch(() => {
        setErrorMessage(MESSAGE.JOIN_LOGIN.inVaildLogin);
      });
  };

  return (
    <main className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(loginFormSubmit)}>
        <div className="flex flex-col items-center gap-2.5 mb-5">
          <p className="t1-bold text-purple-normal-normal">폼플렛</p>
          <p className="h2-bold text-gray-dark-active">노션으로 쉽게 만드는 온라인 전단지</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-2.5">
          <label className="b1-bold text-gray-dark-active" htmlFor="email">
            이메일 아이디
          </label>
          <Input
            id="email"
            type="text"
            placeholder={MESSAGE.JOIN_LOGIN.inputEmail}
            {...register('email')}
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-2.5">
          <label className="b1-bold text-gray-dark-active" htmlFor="password">
            비밀번호
          </label>
          <Input
            id="password"
            type="password"
            placeholder={MESSAGE.JOIN_LOGIN.inputPassword}
            {...register('password')}
          />
          <div className="flex flex-row justify-between">
            {errors.email?.message || errorMessage ? (
              <span className="b2 text-semantic-danger-normal">
                {errors.email?.message || errorMessage}
              </span>
            ) : (
              <span />
            )}
            <Link className="underline b2 text-gray-normal-normal" href={PATH.ROUTE.PASSWORD}>
              비밀번호 재설정
            </Link>
          </div>
        </div>
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
