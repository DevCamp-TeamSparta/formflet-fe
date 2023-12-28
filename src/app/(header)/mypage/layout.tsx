'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NavHeader from '@/components/basic/NavHeader';
import { useAuthStore } from '@/store/store';
import PATH from '@/constants/path/Path';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (!accessToken) {
      route.push(PATH.ROUTE.LOGIN);
    }
  }, []);
  return (
    <div>
      <NavHeader />
      {children}
    </div>
  );
}
