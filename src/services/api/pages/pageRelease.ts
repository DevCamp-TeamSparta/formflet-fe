import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default function pageRelease(subdomain: string) {
  const response = Instance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`${PATH.API.PAGES.release}/${subdomain}`);

  return response;
}
