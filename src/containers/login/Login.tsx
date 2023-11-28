'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import Button from '@/components/basic/Button';
import InputGroup from '@/components/common/InputGroup';
import { loginFormSchema, LoginFormSchema } from '@/types/type';
import getToken from '@/utils/auth/tokenUtils';
import authLogin from '@/services/api/auth/authLogin';
import PATH from '@/constants/path/Path';
import InputGroupArrays from '@/constants/inputProps/InputGroupArrays';

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();
  const { LOGIN_GROUP_PROPS } = InputGroupArrays();

  const loginFormSubmit: SubmitHandler<LoginFormSchema> = async (
    data: LoginFormSchema,
  ): Promise<void> => {
    // API 구현
    try {
      const res: AxiosResponse = await authLogin(data);

      const accessTokenString = await getToken(res, 'authorization');
      const refreshTokenString = await getToken(res, 'refresh-token');

      console.log('Token : ', accessTokenString, refreshTokenString);
      router.push(PATH.ROUTE.ROOT);
      // res에 받아온 값에 따라 이메일이랑 비밀번호가 다른지, 이메일이 존재하는지 확인 후 라우팅
    } catch (e) {
      console.error('[ERROR]', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(loginFormSubmit)}>
      {LOGIN_GROUP_PROPS.map((field) => (
        <InputGroup
          key={field.id}
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          errorMessage={field.errorMessage}
          {...register(field.id)}
        />
      ))}

      <div>
        <Button id="btn-login" type="submit">
          로그인
        </Button>
        <Link href={PATH.ROUTE.JOIN}>회원가입</Link>
      </div>
    </form>
  );
}
