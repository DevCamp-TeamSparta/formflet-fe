'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import InputGroup from '@/components/common/InputGroup';
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
      const res = await userApi.post('/users/login', data, { withCredentials: true });
      console.log('respose : ', res);

      // 라우팅 테스트 성공
      router.push('/');
    } catch (e) {
      console.log('[ERROR]', e);
    }
  };

  const onClickSignUp = () => {
    router.push('/signup');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        className="form-control"
        id="email"
        required
        placeholder={MESSAGE.inputEmail}
        errorMessage={errors.email?.message}
        {...register('email')}
      />

      <InputGroup
        id="password"
        type="password"
        required
        placeholder={MESSAGE.inputPassword}
        errorMessage={errors.password?.message}
        {...register('password')}
      />
      <div>
        <Button id="btn-login" type="submit">
          로그인
        </Button>
        <Button id="btn-signup" type="button" onClick={onClickSignUp}>
          회원가입
        </Button>
      </div>
    </form>
  );
}