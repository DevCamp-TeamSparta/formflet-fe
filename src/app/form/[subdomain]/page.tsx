import { headers } from 'next/headers';
import NotionComponent from '@/components/notion/NotionComponent';
import { useFontStore } from '@/containers/mypage/store';
import pageRelease from '@/services/api/pages/pageRelease';

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
  const { setFont } = useFontStore((state) => ({ setFont: state.setFont }));

  if (page) {
    setFont(page.pageFont.type);
  }

  return (
    <>
      <NotionComponent notionBodyHTML={page.pageContent.content} />
      <input />
    </>
  );
}
