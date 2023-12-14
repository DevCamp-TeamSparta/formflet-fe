import React from 'react';
import { InputGroupProps } from '@/types/typeProps';
import Input from '../basic/Input';

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, errorMessage, errors, ...rest }, ref) => {
    return (
      <div className="flex flex-col justify-center items-start gap-2.5">
        <label className="b1-bold text-purple-normal-normal" htmlFor={id}>
          {label}
        </label>
        <Input id={id} ref={ref} {...rest} />
        {errorMessage && <span className="b2 text-semantic-danger-normal">{errorMessage}</span>}
      </div>
    );
  },
);

export default InputGroup;
