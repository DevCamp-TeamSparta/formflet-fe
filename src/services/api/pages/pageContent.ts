import Cookies from 'universal-cookie';
import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageContent({ pageId }: PageProps) {
  const cookie = new Cookies();
  const authorization = cookie.get('authorization');
  const response: AxiosResponse<{ statusCode: number; message: string; data: Page }> =
    await Instance.get(`${PATH.API.PAGES.page}/${pageId}`, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
  return response;
}
