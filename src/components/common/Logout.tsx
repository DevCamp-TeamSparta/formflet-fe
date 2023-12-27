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
    await authLogout(accessToken)
      .then(() => {
        cookies.remove('authorization');
        cookies.remove('refresh-token');
        route.push(PATH.ROUTE.ROOT);
        route.refresh();
      })
      .catch(() => {
        cookies.remove('authorization');
        cookies.remove('refresh-token');
        route.push(PATH.ROUTE.ROOT);
        route.refresh();
      });
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
