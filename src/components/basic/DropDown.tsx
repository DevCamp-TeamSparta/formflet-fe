import React from 'react';
import { DropDownProps } from '@/types/typeProps';
import { JobList } from '@/types/type';

const DropDown = React.forwardRef<HTMLSelectElement, DropDownProps>(
  ({ id, items, ...rest }, ref) => {
    return (
      <select
        className="flex w-[504px] h-14 justify-between items-center shrink-0 text-gray-light-active border border-gray-normal-normal box-shadow-normal px-8 py-4 rounded-lg"
        key={id}
        id={id}
        ref={ref}
        {...rest}
      >
        {items.map((item: JobList) => (
          <option
            className="flex items-center gap-2.5 self-stretch px-8 py-3"
            key={item.id + item.value}
            value={item.id}
          >
            {item.value}
          </option>
        ))}
      </select>
    );
  },
);

export default DropDown;
