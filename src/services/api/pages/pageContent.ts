import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageContent({ pageId }: PageIdProps) {
  const response: AxiosResponse<{ statusCode: number; message: string; data: Page }> =
    await Instance.get(`${PATH.API.PAGES.PAGE}/${pageId}`);
  return response;
}
