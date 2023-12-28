import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default async function authReissue() {
  const response = await Instance.post<AuthDataProps>(PATH.API.AUTH.REISSUE);

  return response;
}
