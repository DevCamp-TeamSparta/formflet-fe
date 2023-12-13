'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { SidebarMenus } from '@/constants/editProps/editPage';
import DisplaySidebar from '@/containers/mypage/edit/DisplaySidebar';

export default function EditSidebar() {
  const [selected, setSelected] = useState<'display' | 'form'>('display');
  function onClickMenu(name: 'display' | 'form') {
    setSelected(name);
  }
  return (
    <aside className="w-[362px] shrink-0">
      <div className="flex [&>button]:grow [&>button]:b1-bold [&>button]:py-[6px]">
        {SidebarMenus.map(({ name, text }) => (
          <button
            key={`sidebar-menu-${name}`}
            type="button"
            className={clsx('', {
              'text-purple-normal-normal  border-b-[4px]': selected === name,
              'text-gray-dark-active border-b-[1px] border-gray-light-active': selected !== name,
            })}
            onClick={() => onClickMenu(name)}
          >
            {text}
          </button>
        ))}
      </div>
      {
        {
          display: <DisplaySidebar />,
          form: <div>form</div>,
        }[selected]
      }
    </aside>
  );
}
