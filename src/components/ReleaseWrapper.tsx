'use client';

import { useEffect, useState } from 'react';
import { useFontStore } from '@/containers/mypage/store';

export default function ReleaseWrapper({
  children,
  font,
}: {
  children: React.ReactNode;
  font: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));

  useEffect(() => {
    setFont(font);
    setIsLoaded(true);
  }, [font, setFont]);
  return isLoaded && <div>{children}</div>;
}
