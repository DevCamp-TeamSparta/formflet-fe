import Cookies from 'universal-cookie';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageSave(path: string, data: object) {
  const cookies = new Cookies();
  const authorization = cookies.get('authorization');
  const response = await Instance.patch(`${PATH.API.PAGES.EDIT}/${path}`, data, {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  });

  return response;
}
