'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavHeader from '@/components/basic/NavHeader';
import PATH from '@/constants/path/Path';
import authReissue from '@/services/api/auth/authReissue';
import Instance from '@/services/api/Instance';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const route = useRouter();

  useEffect(() => {
    const checkRefreshToken = async () => {
      try {
        const response = await authReissue();

        const { accessToken: getAccessToken } = response.data.data;

        if (!getAccessToken) {
          route.push(PATH.ROUTE.LOGIN);
        }
        localStorage.setItem('accessToken', getAccessToken);
        Instance.defaults.headers.common.Authorization = `Bearer ${getAccessToken}`;
      } catch (e) {
        console.log(e);
      }
    };

    checkRefreshToken().catch(() => {});
  }, []);
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}
