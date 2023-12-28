import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageSave(path: string, data: object) {
  const response = await Instance.patch(`${PATH.API.PAGES.EDIT}/${path}`, data);

  return response;
}
