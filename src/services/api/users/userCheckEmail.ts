import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function userCheckEmail(data: string): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.get(PATH.API.USERS.checkemail, {
    params: { email: data },
  });

  return response;
}
