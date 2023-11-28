'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import InputGroup from '@/components/common/InputGroup';
import { JoinFormSchema, joinFormSchema } from '@/types/type';
import PATH from '@/constants/path/Path';
import userJoin from '@/services/api/users/userJoin';
import InputGroupArrays from '@/constants/inputProps/InputGroupArrays';
import userCheckEmail from '@/services/api/users/userCheckEmail';

export default function Join() {
  const { register, handleSubmit, getValues } = useForm<JoinFormSchema>({
    resolver: zodResolver(joinFormSchema),
  });

  const route = useRouter();
  const [joinButtonDisabled, setJoinButtonDisabled] = useState(true);

  const joinFormSubmit: SubmitHandler<JoinFormSchema> = async (data: JoinFormSchema) => {
    try {
      const response = await userJoin(data);
      console.log('res', response);
      route.push(PATH.ROUTE.ROOT);
    } catch (e) {
      console.error('[ERROR]', e);
    }
  };

  const { JOIN_GROUP_PROPS } = InputGroupArrays();

  const isVaildEmail = async () => {
    const email = getValues('email');

    try {
      const response = await userCheckEmail(email);
      const { message } = response.data;

      console.log('message', message);
      if (response) setJoinButtonDisabled(false);
    } catch (e) {
      console.error('[ERROR] : ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit(joinFormSubmit)}>
      {JOIN_GROUP_PROPS.map((field) => (
        <div key={field.id}>
          <InputGroup
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            errorMessage={field.errorMessage}
            {...register(field.id)}
          />
          {field.id === 'email' && (
            <Button id="btn-checkEmail" type="button" onClick={isVaildEmail}>
              이메일 인증
            </Button>
          )}
        </div>
      ))}

      <Button id="btn-join" type="submit" disabled={joinButtonDisabled}>
        회원가입하기
      </Button>
    </form>
  );
}
