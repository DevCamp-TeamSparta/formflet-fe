import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function userVerifyEmail(email: string): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.post(PATH.API.USERS.VERIFY_EMAIL, {
    email,
  });

  return response;
}
