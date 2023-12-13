import React from 'react';
import DropDown from '../basic/DropDown';
import { DropDownGroupProps } from '@/types/typeProps';

const DropDownGroup = React.forwardRef<HTMLSelectElement, DropDownGroupProps>(
  ({ id, items, label, ...rest }, ref) => {
    return (
      <div className="flex h-[94px] flex-col justify-center items-start gap-2.5 self-stretch">
        <label htmlFor={id}>
          <p className="b1-bold text-purple-normal-normal">{label}</p>
        </label>
        <DropDown id={id} key={id} items={items} ref={ref} {...rest} />
      </div>
    );
  },
);
export default DropDownGroup;