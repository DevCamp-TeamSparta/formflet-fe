import React from 'react';
import { InputProps } from '@/types/typeProps';
import autoHyphen from '@/utils/join/autoHyphen';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, errorMessage, ...rest }, ref) => {
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
      <div>
        <input
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

        {value && (
          <button type="button" onClick={() => setValue('')}>
            x
          </button>
        )}
      </div>
    );
  },
);

export default Input;
