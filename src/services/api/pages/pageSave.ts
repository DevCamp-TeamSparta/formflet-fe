import Cookies from 'universal-cookie';
import Instance from '../Instance';

export default async function pageSave(data: object, path: string) {
  const cookie = new Cookies();
  const authorization = cookie.get('authorization');
  const response = await Instance.patch(`/api/pages/edit/${path}`, data, {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  });

  return response;
}
