import React from 'react';
import { InputProps } from '@/types/typeProps';
import autoHyphen from '@/utils/join/autoHyphen';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, onChange, ...rest }, ref) => {
  const [value, setValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id !== 'mobile') {
      setValue(e.target.value);
    } else {
      const autoHyphenMobile = autoHyphen(e.target);

      setValue(autoHyphenMobile);
    }
  };

  return (
    <input
      className="flex w-[504px] h-14 items-center gap-2.5 px-8 py-4 border border-gray-normal-normal text-gray-dark-hover placeholder:text-gray-light-active box-shadow-normal focus:box-active-shadow-normal rounded-lg"
      type="text"
      id={id}
      value={value}
      onChange={(e) => {
        onChange!(e);
        handleChange(e);
      }}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
