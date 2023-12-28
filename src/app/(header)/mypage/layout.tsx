'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavHeader from '@/components/basic/NavHeader';
import { useAuthStore } from '@/store/store';
import PATH from '@/constants/path/Path';
import authReissue from '@/services/api/auth/authReissue';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const { accessToken, setAccessToken } = useAuthStore((state) => ({
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
  }));

  useEffect(() => {
    const checkRefreshToken = async () => {
      const response = await authReissue();

      const { accessToken: getAccessToken } = response.data.data;

      if (!getAccessToken) {
        route.push(PATH.ROUTE.LOGIN);
      }
      setAccessToken(getAccessToken);
    };

    if (!accessToken) {
      checkRefreshToken().catch(() => alert('새로고침 후 재 로그인해주세요.'));
    }
  }, []);
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}
