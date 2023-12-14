import { headers } from 'next/headers';
import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';

interface PageProps {
  params: {
    subdomain: string;
  };
}
export default async function FormPage({ params }: PageProps) {
  const headerList = headers();
  let pageDomain = params.subdomain;

  if (process.env.IS_DEV) {
    const host = headerList.get('host');
    pageDomain = host?.split('.')[0] || '';
  }
  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/search/${pageDomain}`);
  const page = response.data.data;

  return (
    <NotionComponent
      notionBodyHTML={page.pageContent.content}
      domainName={new URL(page.url).hostname}
    />
  );
}
