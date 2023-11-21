'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import InputGroup from '@/components/common/InputGroup';
import MESSAGE from '@/constants/Messages';
import { SignUpFormSchema, signUpFormSchema } from '@/types/type';
import userApi from '@/services/UserApi';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormSchema> = async (data: SignUpFormSchema) => {
    try {
      console.log('data : ', data);
      console.log('password length : ', data.password.length);
      const res = await userApi.post(
        '/users/signup',
        {
          email: data.email,
          password: data.password,
          name: data.name,
          mobile: data.mobile,
        },
        { withCredentials: true },
      );
      console.log('res', res);
      router.push('/');
    } catch (e) {
      console.log('[ERROR]', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup
        id="email"
        required
        placeholder={MESSAGE.inputEmail}
        errorMessage={errors.email?.message}
        {...register('email')}
      />

      <Button id="btn-emailcheck" type="button">
        이메일 인증
      </Button>
      <br />
      <InputGroup
        id="password"
        type="password"
        required
        placeholder={MESSAGE.inputPassword}
        errorMessage={errors.password?.message}
        {...register('password')}
      />

      <InputGroup
        id="passwordCheck"
        type="password"
        required
        placeholder={MESSAGE.inputPasswordCheck}
        errorMessage={errors.passwordCheck?.message}
        {...register('passwordCheck')}
      />

      <InputGroup
        id="name"
        required
        placeholder={MESSAGE.inputName}
        errorMessage={errors.name?.message}
        {...register('name')}
      />

      <InputGroup
        id="mobile"
        required
        placeholder={MESSAGE.inputMobile}
        errorMessage={errors.mobile?.message}
        {...register('mobile')}
      />

      <Button id="btn-signup" type="submit">
        회원가입
      </Button>
    </form>
  );
}
