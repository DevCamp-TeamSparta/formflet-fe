'use client';

import { useState } from 'react';
import clsx from 'clsx';
import RadioCheckIcon from '../../../public/svg/RadioCheckIcon';
import RadioIcon from '../../../public/svg/RadioIcon';

interface FormRadioProps {
  count: number;
  value: string;
  isRequired: boolean;
}
// TODO: 한 개만 선택이 되도록 로직 수정
export default function FormRadio({ count, value, isRequired }: FormRadioProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <label className="cursor-pointer">
      <div key={value + count} className="relative flex">
        <input
          className="appearance-none"
          type="radio"
          name={`answer${count}`}
          onClick={handleClick}
          value={value}
          required={isRequired}
        />
        <div
          className={clsx(
            'flex w-[417px] h-10 items-center gap-2.5 border border-gray-normal-normal box-shadow-normal px-5 py-4 rounded-lg border-solid',
            { 'bg-gray-light-normal': isClicked },
          )}
        >
          {isClicked ? <RadioCheckIcon /> : <RadioIcon />}
          <p className={isClicked ? 'b1-bold text-gray-dark-hover' : 'b1 text-gray-normal-normal'}>
            {value}
          </p>
        </div>
      </div>
    </label>
  );
}
