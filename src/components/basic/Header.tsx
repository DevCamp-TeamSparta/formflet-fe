'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';

export default function Header() {
  const pathName = usePathname();
  const navList = PATH.ROUTE.NAV_LIST;

  return (
    <header className="w-[1440px] h-20 shrink-0">
      <Link href={PATH.ROUTE.ROOT}>Formflet</Link>
      <nav className="inline-flex items-center gap-8 px-0 py-2.5">
        {navList.map((field) => (
          <Link
            key={field.href}
            href={field.href}
            className={`${
              pathName === field.href ? 'b2-bold text-purple-normal-normal' : 'b2 text-gray-darker'
            }`}
          >
            {field.text}
          </Link>
        ))}
      </nav>
      <hr className="self-stretch" />
    </header>
  );
}
