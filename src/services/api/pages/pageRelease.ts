import PATH from '@/constants/path/Path';
import { ReleaseInstance } from '../Instance';

export default function pageRelease(subdomain: string) {
  const response = ReleaseInstance.get<{
    statusCode: number;
    message: string;
    data: Page;
  }>(`${PATH.API.PAGES.RELEASE}/${subdomain}`);

  return response;
}
