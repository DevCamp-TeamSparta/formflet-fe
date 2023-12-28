import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function authLogout(): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.delete(PATH.API.AUTH.LOGOUT);

  return response;
}
