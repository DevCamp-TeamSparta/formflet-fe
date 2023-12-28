import PATH from '@/constants/path/Path';
import Instance from '../Instance';

interface PageListProps {
  statusCode: number;
  message: string;
  data: PageList[];
}

export default async function pages() {
  const response = await Instance.get<PageListProps>(PATH.API.PAGES.NOTION_LIST);

  return response;
}
