import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default function pageRelease(path: string) {
  const response = Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`${PATH.API.PAGES.release}/${path}`);
  console.log('response', response);

  return response;
}
