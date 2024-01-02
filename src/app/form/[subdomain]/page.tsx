import Instance from '@/services/api/Instance';
import ReleaseWrapper from '@/components/ReleaseWrapper';
import FormComponent from '@/components/form/FormComponent';

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
  const form = page.form[0].guide;
  const formId = page.form[0].id;

  return (
    <ReleaseWrapper className="relative flex justify-center py-[60px] px-[295px]" page={page}>
      <FormComponent form={form} formId={formId} />
    </ReleaseWrapper>
  );
}
