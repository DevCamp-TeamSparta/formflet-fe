'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageComponent from '@/containers/release/PageComponent';
import pageContent from '@/services/api/pages/pageContent';

const fetchContent = async (path) => {
  try {
    const result = await pageContent(path);
    return result;
  } catch (e) {
    console.error('[ERROR]', e);
  }
};

export default function Release() {
  const pathName = usePathname();
  const path = pathName.split('/')[2];

  const [isloaded, setIsLoaded] = useState(false);
  const [notion, setNotion] = useState<object>({ content: '', domain: '' });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchContent(path);
      setNotion({ content: result.content, domain: result.domain });
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isloaded && <PageComponent notionBodyHTML={notion.content} domainName={'teamsparta'} />}
    </div>
  );
}
