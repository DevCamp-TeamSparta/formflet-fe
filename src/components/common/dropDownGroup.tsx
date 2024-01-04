import React from 'react';
import DropDown from '../basic/DropDown';
import { DropDownGroupProps } from '@/types/typeProps';

const DropDownGroup = React.forwardRef<HTMLSelectElement, DropDownGroupProps>(
  ({ id, items, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col justify-center items-start gap-2.5">
        <label htmlFor={id}>
          <p className="b1-bold text-gray-dark-active">{label}</p>
        </label>
        <DropDown id={id} key={id} items={items} ref={ref} {...rest} />
      </div>
    );
  },
);
export default DropDownGroup;
