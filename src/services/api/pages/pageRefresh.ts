import Cookies from 'universal-cookie';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default function PageRefresh(path: string, content: string) {
  const cookie = new Cookies();
  const authorization = cookie.get('authorization');

  const response = Instance.patch(
    `${PATH.API.PAGES.refresh}/${path}`,
    { content },
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    },
  );

  return response;
}
