import EditDisplay from './EditDisplay';
import EditSidebar from './EditSidebar';

interface PageProps {
  pageId: string;
}

export default function EditPageContainer({ pageId }: PageProps) {
  return (
    <div className="flex">
      <EditSidebar />
      <EditDisplay pageId={pageId} />
    </div>
  );
}
