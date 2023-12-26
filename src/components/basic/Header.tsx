'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Logo from '../../../public/svg/Logo';
import Logout from '../common/Logout';

function handleLogoRoute(path: string): boolean {
  let condition = false;
  if (path.startsWith('/mypage')) {
    condition = false;
  } else {
    condition = true;
  }
  return condition;
}

export default function Header() {
  const pathName = usePathname();
  const navList = PATH.ROUTE.NAV_LIST;

  const isRoot = handleLogoRoute(pathName);

  return (
    <header className="fixed w-full h-[64px] flex flex-col justify-between items-center shrink-0 z-10 bg-white">
      <div className="w-[850px] flex justify-between items-center shrink-0 pt-[14px]">
        <Link href={isRoot ? PATH.ROUTE.ROOT : PATH.ROUTE.MYPAGE}>
          <Logo />
        </Link>
        {pathName.includes(PATH.ROUTE.MYPAGE) ? (
          <nav className="inline-flex items-center gap-8">
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
      <hr className="self-stretch text-gray-light-active" />
    </header>
  );
}
