'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Logo from '../../../public/svg/Logo';
import Logout from '../common/Logout';
import ArrowRightCircle from '../../../public/svg/ArrowRightCircle';

export default function Header() {
  const pathName = usePathname();
  const navList = PATH.ROUTE.NAV_LIST;

  return (
    <header className="fixed w-full h-[64px] flex flex-col justify-between items-center shrink-0 z-10 bg-white">
      <div className="w-[850px] flex justify-between items-center shrink-0 pt-[14px]">
        <Link href={pathName.startsWith('/mypage') ? PATH.ROUTE.MYPAGE : PATH.ROUTE.LOGIN}>
          <Logo />
        </Link>
        {pathName.includes(PATH.ROUTE.MYPAGE) && (
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
        )}
        {pathName === PATH.ROUTE.ROOT && (
          <Link
            className="flex h-9 bg-purple-normal-normal items-center box-shadow-normal gap-2.5 px-5 py-4 rounded-lg"
            href={PATH.ROUTE.LOGIN}
          >
            <p className="b1-bold text-white">로그인</p>
            <ArrowRightCircle />
          </Link>
        )}
      </div>
      <hr className="self-stretch text-gray-light-active" />
    </header>
  );
}
