import Cookies from 'universal-cookie';
import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageContent({ pageId }: PageProps) {
  const cookies = new Cookies();
  const authorization = cookies.get('authorization');
  const response: AxiosResponse<{ statusCode: number; message: string; data: Page }> =
    await Instance.get(`${PATH.API.PAGES.PAGE}/${pageId}`, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    });
  return response;
}
