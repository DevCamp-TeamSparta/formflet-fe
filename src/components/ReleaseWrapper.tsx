'use client';

import { useEffect } from 'react';
import { useFontStore } from '@/containers/mypage/store';

export default function ReleaseWrapper({
  children,
  font,
}: {
  children: React.ReactNode;
  font: string;
}) {
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));

  useEffect(() => {
    setFont(font);
  }, [font, setFont]);
  return <div>{children}</div>;
}
