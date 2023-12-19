import Instance from '@/services/api/Instance';
import NotionComponent from '@/components/notion/NotionComponent';
import ReleaseWrapper from '@/components/ReleaseWrapper';
import CtaComponent from '@/components/cta/CtaComponent';

interface PageProps {
  params: {
    subdomain: string;
  };
}
export default async function NotionPage({ params }: PageProps) {
  const pageDomain = params.subdomain;

  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/release/${pageDomain}`);
  const page = response.data.data;

  return (
    <ReleaseWrapper className="relative" page={page}>
      <NotionComponent recordMap={page.pageDetail.content} />
      <div className="absolute inset-x-0 bottom-10 transform -translate-y-1/2">
        <div className="flex justify-center items-end h-full">
          <CtaComponent params={params} />
        </div>
      </div>
    </ReleaseWrapper>
  );
}
