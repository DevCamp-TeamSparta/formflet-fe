'use client';

import { useEffect, useState } from 'react';
import { useCtaStore, useFontStore } from '@/store/store';

export default function ReleaseWrapper({
  className,
  children,
  page,
}: {
  className: string;
  children: React.ReactNode;
  page: Page;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));
  const { setCtaContent, setCtaLink, setCtaFontSize, setCtaFontColor, setCtaBackColor } =
    useCtaStore((state) => ({
      setCtaContent: state.setCtaContent,
      setCtaLink: state.setCtaLink,
      setCtaFontSize: state.setCtaFontSize,
      setCtaFontColor: state.setCtaFontColor,
      setCtaBackColor: state.setCtaBackColor,
    }));

  const font = page.pageFont.type;

  useEffect(() => {
    setFont(font);
    setCtaContent(page.cta.content);
    setCtaLink(page.cta.link);
    setCtaFontSize(page.cta.fontSize);
    setCtaFontColor(page.cta.fontColor);
    setCtaBackColor(page.cta.backgroundColor);
    setIsLoaded(true);
  }, []);
  return isLoaded && <div className={className}>{children}</div>;
}
