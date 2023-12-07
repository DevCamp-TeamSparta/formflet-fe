'use client';

import { usePathname } from 'next/navigation';

export default function Release() {
  const pathName = usePathname();
  return (
    <div>
      <h1>The Release Page</h1>
      <h2>{pathName}</h2>
    </div>
  );
}
