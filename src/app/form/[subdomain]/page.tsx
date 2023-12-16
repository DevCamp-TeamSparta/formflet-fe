import { headers } from 'next/headers';
import NotionComponent from '@/components/notion/NotionComponent';
import pageRelease from '@/services/api/pages/pageRelease';
import ReleaseWrapper from '@/components/ReleaseWrapper';

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
  const response = await pageRelease(pageDomain);
  const page = response.data.data;
  const font = page.pageFont.type;

  return (
    <ReleaseWrapper font={font}>
      <NotionComponent notionBodyHTML={page.pageDetail.content} />
    </ReleaseWrapper>
  );
}
