import PATH from '@/constants/path/Path';
import Instance from '../Instance';

interface PagelistProps {
  statusCode: number;
  message: string;
  data: PageList[];
}

export default async function pages() {
  const response = await Instance.get<PagelistProps>(PATH.API.PAGES.notionList);

  return response;
}
