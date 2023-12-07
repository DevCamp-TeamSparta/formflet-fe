import { AxiosResponse } from 'axios';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default async function pages(): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.get(PATH.API.PAGES.notionList);

  return response;
}
