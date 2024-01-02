'use client';

import { usePathname } from 'next/navigation';
import PATH from '@/constants/path/Path';
import Logo from '../../public/svg/Logo';
import Button from './basic/Button';

export default function MadeLogo() {
  const pathName = usePathname();
  const handleLink = () => {
    if (!pathName.startsWith('/mypage')) {
      window.location.replace(PATH.ROUTE.RANDING);
    }
  };
  return (
    <Button
      className="flex flex-col items-center gap-[5px] rounded border border-gray-light-active box-shadow-normal px-[5px] py-0 border-solid"
      onClick={handleLink}
    >
      <p className="b1-bold text-gray-dark-active flex justify-center items-center gap-[5px]">
        Made by
        <Logo />
      </p>
    </Button>
  );
}
