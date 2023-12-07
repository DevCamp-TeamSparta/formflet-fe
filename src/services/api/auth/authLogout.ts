import Instance from '../Instance';
import PATH from '@/constants/path/Path';
import { Token } from '@/types/type';

export default async function authLogout(token: Token): Promise<void> {
  await Instance.delete(PATH.API.AUTH.logout, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
