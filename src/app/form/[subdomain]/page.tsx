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
  if (process.env.NODE_ENV !== 'development') {
    const host = headerList.get('host');
    pageDomain = host?.split('.')[0] || '';
  }
  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/release/${pageDomain}`);
  const page = response.data.data;

  return (
    <NotionComponent
      notionBodyHTML={page.pageContent.content}
      domainName={new URL(page.url).hostname}
    />
  );
}
