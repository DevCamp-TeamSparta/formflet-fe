'use client';

import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation';
import Button from '../basic/Button';
import PATH from '@/constants/path/Path';

export default function Logout() {
  const route = useRouter();
  const cookies = new Cookies();
  const handleLogout = () => {
    cookies.remove('authorization');
    cookies.remove('refresh-token');

    route.push(PATH.ROUTE.ROOT);
  };
  return <Button onClick={handleLogout}>로그아웃</Button>;
}
