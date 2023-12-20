import Instance from '@/services/api/Instance';
import ReleaseWrapper from '@/components/ReleaseWrapper';
import EditFormView from '@/containers/mypage/edit/EditFormView';

interface PageProps {
  params: {
    subdomain: string;
  };
}

export default async function FormPage({ params }: PageProps) {
  const pageSubDomain = params.subdomain;

  const response = await Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`/api/pages/release/${pageSubDomain}`);
  const page = response.data.data;
  const form = page.form.guide;
  const formId = page.form.id;

  return (
    <ReleaseWrapper className="relative" page={page}>
      <EditFormView form={form} formId={formId} />
    </ReleaseWrapper>
  );
}
