import EditDisplay from './EditDisplay';
import EditSidebar from './EditSidebar';

export default function EditPageContainer() {
  return (
    <div className="flex">
      <EditSidebar />
      <EditDisplay />
    </div>
  );
}
