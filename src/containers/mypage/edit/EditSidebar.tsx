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
        {SidebarMenus.map((item) => (
          <button
            key={`sidebar-menu-${item.name}`}
            type="button"
            className={clsx({
              'text-purple-normal-normal border-b-[4px]': selected === item.name,
              'text-gray-dark-active border-b-[1px] border-gray-light-active':
                selected !== item.name,
            })}
            onClick={() => onClickMenu(item.name)}
          >
            <div className="flex items-center justify-center gap-2.5">
              {item.text}
              {selected === item.name ? item.svgSelected : item.svg}
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
