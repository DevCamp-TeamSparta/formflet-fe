'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import PageComponent from '@/containers/release/PageComponent';
import pageContent from '@/services/api/pages/pageContent';

export default function ReleasePage() {
  const pathName = usePathname();
  const path = pathName.split('/')[2];

  const [isloaded, setIsLoaded] = useState(false);
  const [notion, setNotion] = useState({ content: '', domain: '' });

  const fetchContent = async (path: string) => {
    const result = await pageContent(path);

    return result;
  };

  const fetchData = async () => {
    const result = await fetchContent(path);
    if (result) {
      setNotion({ content: result.content, domain: result.domain });
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isloaded && <PageComponent notionBodyHTML={notion.content} domainName={notion.domain} />}
    </div>
  );
}
