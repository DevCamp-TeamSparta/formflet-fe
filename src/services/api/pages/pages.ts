import Cookies from 'universal-cookie';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';

interface PagelistProps {
  statusCode: number;
  message: string;
  data: PageList[];
}

export default async function pages() {
  const cookie = new Cookies();
  const authorization = cookie.get('authorization');
  const response = await Instance.get<PagelistProps>(PATH.API.PAGES.notionList, {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  });

  return response;
}
