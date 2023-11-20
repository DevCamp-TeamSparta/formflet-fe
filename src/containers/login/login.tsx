'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { loginFormSchema, LoginFormSchema } from '@/types/type';
import MESSAGE from '@/constants/Messages';
import userApi from '@/services/UserApi';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  /**
   * @param data email, password
   *
   * async await axios로 서버와 통신하여 이메일, 비밀번호 유효성 처리 로직
   */
  const onSubmit: SubmitHandler<LoginFormSchema> = async (data: LoginFormSchema) => {
    // API 구현
    try {
      const res = await userApi.post('/users/signin', {
        email: data.email,
        password: data.password,
      });
      console.log(res);

      // 라우팅 테스트 성공
      router.push('/');
    } catch (e) {
      console.log('[ERROR]', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input id="email" required placeholder={MESSAGE.inputEmail} {...register('email')} />
      <div>{errors.email?.message}</div>
      <Input
        id="password"
        type="password"
        required
        placeholder={MESSAGE.inputPassword}
        {...register('password')}
      />
      <div>{errors.password?.message}</div>
      <Button id="submit-btn" type="submit">
        로그인하기
      </Button>
    </form>
  );
}
