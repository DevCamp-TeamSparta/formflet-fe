import { cookies } from 'next/headers';
import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';

interface PageProps {
  pageId: string;
}
export default async function EditDisplay({ pageId }: PageProps) {
  const authorization = cookies().get('authorization').value;
  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/${pageId}`, {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  });

  const page = response.data.data;
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
