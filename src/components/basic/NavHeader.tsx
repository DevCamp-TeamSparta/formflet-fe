'use client';

import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';

export default function NavHeader() {
  const pathName = usePathname();
  const navList = PATH.ROUTE.NAV_LIST;

  let navItem = '';

  navList.forEach((item) => {
    if (item.href === pathName) {
      navItem = item.text;
    }
  });
  return (
    <header className="w-[1440px] h-[72px] flex flex-col justify-end items-center gap-[22px] shrink-0 pt-[22px]">
      <div className="w-[850px] h-9 flex justify-between items-center shrink-0">
        <p className="b1-bold text-gray-dark-active">{navItem}</p>
      </div>
      <hr className="text-gray-light-active self-stretch" />
    </header>
  );
}
