import React from 'react';
import { InputProps } from '@/types/type';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, onChange, errorMessage, ...rest }, ref) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
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
