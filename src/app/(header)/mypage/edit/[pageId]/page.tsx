import EditPageContainer from '@/containers/mypage/edit/EditPageContainer';

interface PageProps {
  params: {
    pageId: string;
  };
}

export default function EditPage({ params }: PageProps) {
  return <EditPageContainer pageId={params.pageId} />;
}
