'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { SidebarMenus } from '@/constants/editProps/editPage';
import DisplaySidebar from '@/containers/mypage/edit/DisplaySidebar';
import FormSidebar from './FormSidebar';

export default function EditSidebar() {
  const [selected, setSelected] = useState<'display' | 'form'>('display');
  function onClickMenu(name: 'display' | 'form') {
    setSelected(name);
  }

  useEffect(() => {
    setSelected('display');
  }, []);
  return (
    <aside className="w-[362px] shrink-0">
      <div className="flex [&>button]:grow [&>button]:b1-bold [&>button]:py-[6px]">
        {SidebarMenus.map(({ name, text, svg }) => (
          <button
            key={`sidebar-menu-${name}`}
            type="button"
            className={clsx({
              'text-purple-normal-normal  border-b-[4px]': selected === name,
              'text-gray-dark-active border-b-[1px] border-gray-light-active': selected !== name,
            })}
            onClick={() => onClickMenu(name)}
          >
            <div className="flex items-center justify-center gap-2.5">
              {text}
              {svg}
            </div>
          </button>
        ))}
      </div>
      {
        {
          display: <DisplaySidebar />,
          form: <FormSidebar />,
        }[selected]
      }
    </aside>
  );
}
