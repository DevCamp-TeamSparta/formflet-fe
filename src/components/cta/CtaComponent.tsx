'use client';

import { useRouter } from 'next/navigation';
import { useCtaStore } from '@/store/store';
import Button from '../basic/Button';

interface CtaProps {
  params: {
    subdomain: string;
  };
}

export default function CtaComponent({ params }: CtaProps) {
  const ctaStore = useCtaStore();
  const route = useRouter();
  const pageDomain = params.subdomain;

  const handleRoute = () => {
    if (ctaStore.ctaLink === '' && pageDomain) {
      route.push(`/form/${pageDomain}`);
    } else {
      window.location.assign(`https://${ctaStore.ctaLink}`);
    }
  };

  return (
    <Button
      type="button"
      className="flex flex-col justify-center items-center gap-2.5 box-shadow-normal px-5 py-2.5 rounded-lg"
      style={{ backgroundColor: ctaStore.ctaBackColor }}
      onClick={handleRoute}
    >
      <p
        className="font-bold"
        style={{ color: ctaStore.ctaFontColor, fontSize: ctaStore.ctaFontSize }}
      >
        {ctaStore.ctaContent}
      </p>
    </Button>
  );
}