import Link from 'next/link';
import PATH from '@/constants/path/Path';
import { headers } from 'next/headers';
import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';

export default async function Home() {
  const headerList = headers();
  const host = headerList.get('host');
  const subDomain = host.split('.')[0];

  if (
    subDomain === 'formflet' ||
    subDomain === 'www' ||
    subDomain === 'test' ||
    subDomain === 'localhost:3000' ||
    subDomain === '127'
  ) {
    return (
      <>
        <Link href={PATH.ROUTE.LOGIN}>로그인</Link>
        <Link href={PATH.ROUTE.JOIN}>회원가입</Link>
      </>
    );
  }

  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/page/${subDomain}`);
  const page = response.data.data;
  return (
    <NotionComponent
      notionBodyHTML={page.pageContent.content}
      domainName={new URL(page.pageUrl).hostname}
    />
  );
}
