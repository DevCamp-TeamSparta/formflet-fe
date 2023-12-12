import { cookies } from 'next/headers';
import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';

export default async function EditDisplay() {
  const cookieList = cookies();
  const data = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>('/api/pages/6', {
    headers: {
      Authorization: `Bearer ${cookieList.get('authorization').value}`,
    },
  });

  const page = data.data.data;
  return (
    <div className="m-[20px_20px_20px_0] grow w-full min-h-full border rounded-[8px] border-gray-light-active overflow-hidden">
      {page.id && (
        <NotionComponent
          notionBodyHTML={page.pageContent.content}
          domainName={new URL(page.pageUrl).hostname}
        />
      )}
    </div>
  );
}
