import { ReleaseInstance } from '@/services/api/Instance';
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

  const response = await ReleaseInstance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/release/${pageDomain}`);
  const page = response.data.data;
  const ctaStatus = page.cta.status;
  return (
    <ReleaseWrapper className="relative" page={page}>
      <NotionComponent recordMap={page.pageDetail.content} />
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
        {ctaStatus && <CtaComponent params={params} />}
      </div>
    </ReleaseWrapper>
  );
}
