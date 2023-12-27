'use client';

import { useState } from 'react';
import clsx from 'clsx';
import CheckboxCheckIcon from '../../../public/svg/CheckboxCheckIcon';
import CheckboxIcon from '../../../public/svg/CheckboxIcon';

interface FormCheckboxProps {
  count: number;
  value: string;
  isRequired: boolean;
}

export default function FormCheckbox({ count, value, isRequired }: FormCheckboxProps) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <label className="cursor-pointer">
      <div key={value + count} className="relative flex">
        <input
          className="appearance-none"
          type="checkbox"
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
          {isClicked ? <CheckboxCheckIcon /> : <CheckboxIcon />}
          <p className={isClicked ? 'b1-bold text-gray-dark-hover' : 'b1 text-gray-normal-normal'}>
            {value}
          </p>
        </div>
      </div>
    </label>
  );
}
