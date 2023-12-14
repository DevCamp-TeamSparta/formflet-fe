'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Logo from '../../../public/svg/Logo';
import Logout from '../common/Logout';

export default function Header() {
  const pathName = usePathname();
  const navList = PATH.ROUTE.NAV_LIST;

  return (
    <header className="w-full h-[72px] flex flex-col justify-end items-center gap-[22px] shrink-0 pt-[22px]">
      <div className="w-[850px] h-9 flex justify-between shrink-0">
        <Link href={PATH.ROUTE.ROOT}>
          <Logo />
        </Link>
        {pathName.includes(PATH.ROUTE.MYPAGE) ? (
          <nav className="inline-flex items-center gap-8 px-0 py-2.5">
            {navList.map((field) => (
              <Link
                key={field.href}
                href={field.href}
                className={`${
                  pathName === field.href
                    ? 'b2-bold text-purple-normal-normal'
                    : 'b2 text-gray-darker'
                }`}
              >
                {field.text}
              </Link>
            ))}
            <Logout />
          </nav>
        ) : null}
      </div>

      <hr className="text-gray-light-active self-stretch" />
    </header>
  );
}
