'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import { JoinFormSchema, joinFormSchema } from '@/types/type';
import PATH from '@/constants/path/Path';
import userJoin from '@/services/api/users/userJoin';
import InputGroupArrays from '@/constants/inputProps/InputGroupArrays';
import DropDownGroup from '@/components/common/dropDownGroup';
import JOB_LIST from '@/constants/jobs/JobList';
import JoinAgree from './JoinAgree';
import JoinInputGroup from '@/components/template/JoinInputGroup';

export default function Join() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<JoinFormSchema>({
    resolver: zodResolver(joinFormSchema),
  });

  const route = useRouter();
  const [joinButtonDisabled, setJoinButtonDisabled] = useState<boolean>(false);

  const joinFormSubmit: SubmitHandler<JoinFormSchema> = async (data: JoinFormSchema) => {
    try {
      const response = await userJoin(data);
      if (response) {
        route.push(PATH.ROUTE.ROOT);
      }
    } catch (e) {
      console.error('[ERROR]', e);
    }
  };

  const { JOIN_GROUP_PROPS } = InputGroupArrays();
  return (
    <main className="flex flex-col items-center">
      <form
        className="flex flex-col items-center gap-10 mb-[60px]"
        onSubmit={handleSubmit(joinFormSubmit)}
      >
        <div className="flex flex-col items-center gap-2.5">
          <p className="t1-bold text-purple-normal-normal">폼플렛</p>
          <p className="h2-bold text-gray-dark-active">회원가입</p>
        </div>
        <div className="flex flex-col self-stretch gap-5">
          {JOIN_GROUP_PROPS.map((field) => (
            <JoinInputGroup
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              errorMessage={errors[field.id]?.message}
              errors={errors}
              getValues={getValues}
              placeholder={field.placeholder}
              {...register(field.id)}
            />
          ))}
          <DropDownGroup id="job" items={JOB_LIST} label="직무" {...register('job')} />
          <JoinAgree setJoinButtonDisabled={setJoinButtonDisabled} />
          <Button
            className="flex bg-purple-normal-normal box-shadow-normal w-[502px] h-14 justify-center items-center rounded-lg disabled:bg-gray-normal-normal disabled:text-gray-normal-normal"
            id="btn-join"
            type="submit"
            disabled={joinButtonDisabled}
          >
            <p className="text-white b1-bold">회원가입</p>
          </Button>
        </div>
      </form>
    </main>
  );
}
