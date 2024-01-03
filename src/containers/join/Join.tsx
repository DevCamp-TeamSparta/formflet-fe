'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/basic/Button';
import { JoinFormSchema, joinFormSchema } from '@/types/type';
import PATH from '@/constants/path/Path';
import userJoin from '@/services/api/users/userJoin';
import DropDownGroup from '@/components/common/dropDownGroup';
import JOB_LIST from '@/constants/jobs/JobList';
import JoinAgree from './JoinAgree';
import userCheckEmail from '@/services/api/users/userCheckEmail';
import MESSAGE from '@/constants/Messages';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';
import Input from '@/components/basic/Input';

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
  const [emailState, setEmailState] = useState({
    message: '',
    state: false,
  });

  const joinFormSubmit: SubmitHandler<JoinFormSchema> = async (data: JoinFormSchema) => {
    try {
      const response = await userJoin(data);
      if (response) {
        route.push(PATH.ROUTE.LOGIN);
      }
    } catch (e) {
      console.error('[ERROR]', e);
    }
  };

  const isVaildEmail = async () => {
    const email = getValues('email');
    if (!email) {
      return;
    }

    await userCheckEmail(email)
      .then(() => {
        setEmailState({ message: MESSAGE.JOIN_LOGIN.vaildEmail, state: true });
      })
      .catch(() => {
        setEmailState({ message: MESSAGE.JOIN_LOGIN.inVaildEmail, state: false });
      });
  };

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
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-start gap-2.5">
            <label className="b1-bold text-gray-dark-active" htmlFor="email">
              이메일 아이디
            </label>
            <div className="flex self-stretch justify-between gap-3">
              <Input
                className="flex w-[331px] h-14 items-center px-8 py-4 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal placeholder:text-gray-light-active text-gray-dark-hover rounded-lg"
                id="email"
                type="text"
                placeholder={MESSAGE.JOIN_LOGIN.inputEmail}
                {...register('email')}
              />
              <Button
                className="flex h-14 items-center px-8 py-4 shrink-0 bg-purple-normal-normal box-shadow-normal rounded-lg gap-1.5"
                id="btn-checkEmail"
                type="button"
                onClick={() => isVaildEmail()}
              >
                <p className="text-white b1-bold">중복 확인</p>
                <ArrowRightCircle />
              </Button>
            </div>
            {emailState.message && (
              <p
                className={`b2  ${
                  emailState.state === true
                    ? `text-semantic-success-dark`
                    : `text-semantic-danger-normal`
                }`}
              >
                {emailState.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div>
              <label className="b1-bold text-gray-dark-active" htmlFor="password">
                비밀번호
              </label>
              <input
                className="flex w-[502px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
                id="password"
                type="password"
                placeholder={MESSAGE.JOIN_LOGIN.inputPassword}
                {...register('password')}
              />
            </div>
            {errors.password?.message && (
              <p className="b2 text-semantic-danger-normal">{errors.password?.message}</p>
            )}
          </div>
          <div className="flex flex-col items-start justify-center gap-3">
            <div>
              <label className="b1-bold text-gray-dark-active" htmlFor="checkPassword">
                비밀번호 확인
              </label>
              <Input
                id="checkPassword"
                type="password"
                placeholder={MESSAGE.JOIN_LOGIN.inputcheckPassword}
                {...register('checkPassword')}
              />
            </div>
            {errors.password?.message && (
              <p className="b2 text-semantic-danger-normal">{errors.checkPassword?.message}</p>
            )}
          </div>
          <div>
            <label className="b1-bold text-gray-dark-active" htmlFor="name">
              이름
            </label>
            <Input
              id="name"
              type="text"
              placeholder={MESSAGE.JOIN_LOGIN.inputName}
              {...register('name')}
            />
          </div>
          <div>
            <label className="b1-bold text-gray-dark-active" htmlFor="mobile">
              휴대폰
            </label>
            <Input
              id="mobile"
              type="text"
              placeholder={MESSAGE.JOIN_LOGIN.inputMobile}
              {...register('mobile')}
            />
          </div>
          <DropDownGroup id="job" items={JOB_LIST} label="직무" {...register('job')} />
          <JoinAgree setStateBoolean={setJoinButtonDisabled} />
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
