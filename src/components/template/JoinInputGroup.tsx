import React, { useState } from 'react';
import { JoinGroupProps } from '@/types/typeProps';
import Input from '../basic/Input';
import Button from '../basic/Button';
import userCheckEmail from '@/services/api/users/userCheckEmail';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';
import MESSAGE from '@/constants/Messages';

const JoinInputGroup = React.forwardRef<HTMLInputElement, JoinGroupProps>(
  ({ id, label, errorMessage, errors, getValues, ...rest }, ref) => {
    const [emailState, setEmailState] = useState({
      message: '',
      state: false,
    });

    const isVaildEmail = async () => {
      try {
        const email = getValues('email');
        const response = await userCheckEmail(email);
        setEmailState({ message: MESSAGE.JOIN_LOGIN.vaildEmail, state: true });

        const { message } = response.data;
        console.log(message);
      } catch (e) {
        setEmailState({ message: MESSAGE.JOIN_LOGIN.inVaildEmail, state: false });
        console.error('[ERROR] : ', e);
      }
    };
    return (
      <div className="flex flex-col items-center gap-5 self-stretch">
        {id === 'email' ? (
          <div className="h-[94px] self-stretch items-center">
            <label className="b1-bold text-purple-normal-normal" htmlFor={id}>
              {label}
            </label>
            <div className="flex gap-3">
              <Input
                className="flex w-[331.315px] h-14 items-center gap-2.5 px-8 py-4 shrink-0 border border-gray-normal-normal box-shadow-normal rounded-lg"
                id={id}
                ref={ref}
                {...rest}
              />
              <Button
                className="flex w-[156.622px] h-14 items-center px-8 py-4 shrink-0 bg-purple-normal-normal box-shadow-normal rounded-lg gap-1.5"
                id="btn-checkEmail"
                type="button"
                onClick={isVaildEmail}
              >
                <p className="b1-bold text-white">중복 확인</p>
                <ArrowRightCircle />
              </Button>
            </div>
            {emailState.message && (
              <p
                className={`b2  ${
                  emailState.state === true
                    ? `text-semantic-success-normal`
                    : `text-semantic-danger-normal`
                }`}
              >
                {emailState.message}
              </p>
            )}
          </div>
        ) : (
          <div>
            <div className="flex w-[502px] h-[94px] flex-col justify-center items-start gap-2.5">
              <label className="b1-bold text-purple-normal-normal" htmlFor={id}>
                {label}
              </label>
              <Input id={id} ref={ref} {...rest} />
            </div>
            {errorMessage && !(id === 'name') && !(id === 'mobile') && (
              <p className="b2 text-semantic-danger-normal">{errorMessage}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

export default JoinInputGroup;
