import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default function PageRefresh(path: string) {
  const response = Instance.patch(`${PATH.API.PAGES.refresh}/${path}`);

  return response;
}
