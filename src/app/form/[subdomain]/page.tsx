import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';

interface PageProps {
  params: {
    subdomain: string;
  };
}
export default async function FormPage({ params }: PageProps) {
  const pageDomain = params.subdomain;

  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/release/${pageDomain}`);
  const page = response.data.data;

  return (
    <>
      <NotionComponent recordMap={page.pageContent.content} />
      <input />
    </>
  );
}
