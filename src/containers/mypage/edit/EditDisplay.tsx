'use client';

import { useEffect, useState } from 'react';
import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/template/Notion';

export default function EditDisplay() {
  const [page, setPage] = useState<Page>({} as Page);

  useEffect(() => {
    Instance.get<{
      statusCode: number;
      message: string;
      data: Page;
    }>('/api/pages/5').then((p) => setPage(p.data.data));
  }, []);
  console.log(page && page);

  return (
    <div className="m-[20px_20px_20px_0] grow w-full min-h-full border rounded-[8px] border-gray-light-active overflow-hidden">
      {page.id && (
        <NotionComponent
          notionBodyHTML={page.editPage.content}
          domainName={new URL(page.pageUrl).hostname}
        />
      )}
    </div>
  );
}
