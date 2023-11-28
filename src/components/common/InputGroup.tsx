import React from 'react';
import { InputGroupProps } from '@/types/typeProps';
import Input from '../basic/Input';

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ id, label, errorMessage, ...rest }, ref) => {
    return (
      <div>
        <Input id={id} ref={ref} errorMessage={errorMessage} {...rest} />
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    );
  },
);

export default InputGroup;
