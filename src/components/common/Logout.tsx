'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import PATH from '@/constants/path/Path';
import authLogout from '@/services/api/auth/authLogout';
import { Token } from '@/types/type';
import Button from '../basic/Button';

export default function Logout() {
  const cookies = new Cookies();
  const route = useRouter();

  const accessToken: Token = cookies.get('authorization');

  const handleLogout = async () => {
    const response = await authLogout(accessToken);
    if (response.status === 200) {
      cookies.remove('authorization');
      cookies.remove('refresh-token');
      route.push(PATH.ROUTE.ROOT);
    } else {
      cookies.remove('authorization');
      cookies.remove('refresh-token');
      route.push(PATH.ROUTE.ROOT);
    }
  };
  return (
    <Button
      className="b2 text-gray-darker inline-flex items-center gap-8 px-0 py-2.5 "
      type="button"
      onClick={() => handleLogout()}
    >
      로그아웃
    </Button>
  );
}
