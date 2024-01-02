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
        if (!email) {
          return;
        }
        const response = await userCheckEmail(email);
        if (response) {
          setEmailState({ message: MESSAGE.JOIN_LOGIN.vaildEmail, state: true });
        }
      } catch (e) {
        setEmailState({ message: MESSAGE.JOIN_LOGIN.inVaildEmail, state: false });
        console.error('[ERROR] : ', e);
      }
    };
    return (
      <div className="flex flex-col items-center self-stretch gap-5">
        {id === 'email' ? (
          <div className="self-stretch flex flex-col items-start gap-2.5">
            <label className="b1-bold text-gray-dark-active" htmlFor={id}>
              {label}
            </label>
            <div className="flex self-stretch justify-between gap-3">
              <Input
                className="flex w-[331px] h-14 items-center px-8 py-4 shrink-0 border border-gray-normal-normal box-shadow-normal focus:box-active-shadow-normal text-gray-dark-hover rounded-lg"
                id={id}
                ref={ref}
                {...rest}
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
        ) : (
          <div>
            <div className="flex flex-col justify-center items-start gap-2.5">
              <label className="b1-bold text-gray-dark-active" htmlFor={id}>
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
