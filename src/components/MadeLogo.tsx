import Link from 'next/link';
import Logo from '../../public/svg/Logo';
import PATH from '@/constants/path/Path';

export default function MadeLogo() {
  return (
    <Link
      href={PATH.ROUTE.ROOT}
      className="flex flex-col items-center gap-[5px] rounded border border-gray-light-active box-shadow-normal px-[5px] py-0 border-solid"
    >
      <p className="b1-bold text-gray-dark-active flex justify-center items-center gap-[5px]">
        Made by
        <Logo />
      </p>
    </Link>
  );
}
