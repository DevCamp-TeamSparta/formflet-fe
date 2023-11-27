'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/basic/Button';
import InputGroup from '@/components/common/InputGroup';
import MESSAGE from '@/constants/Messages';
import { SignUpFormSchema, signUpFormSchema } from '@/types/type';
import userApi from '@/services/UserApi';

export default function Join() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const router = useRouter();
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);

  const signUpFormSubmit: SubmitHandler<SignUpFormSchema> = async (data: SignUpFormSchema) => {
    try {
      const res = await userApi.post('/users/join', {
        email: data.email,
        password: data.password,
        name: data.name,
        mobile: data.mobile,
      });
      console.log('res', res);
      router.push('/');
    } catch (e) {
      console.log('[ERROR]', e);
    }
  };

  const isVaildEmail = async () => {
    const email: string = getValues('email');

    try {
      const res = await userApi.get('/users/check-email', {
        params: {
          email,
        },
      });
      const message = res.data ? res.data.message : null;

      console.log('message', message);
      if (res) setSignUpButtonDisabled(false);
    } catch (e) {
      console.log('[ERROR] : ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(signUpFormSubmit)}>
      <InputGroup
        id="email"
        required
        placeholder={MESSAGE.inputEmail}
        errorMessage={errors.email?.message}
        {...register('email')}
      />

      <Button id="btn-emailCheck" type="button" onClick={isVaildEmail}>
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

      <Button id="btn-signup" type="submit" disabled={signUpButtonDisabled}>
        회원가입하기
      </Button>
    </form>
  );
}
