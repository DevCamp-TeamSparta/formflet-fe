import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';
import { LoginFormSchema } from '@/types/type';

export default async function authLogin(data: LoginFormSchema): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.post(PATH.API.AUTH.login, {
    email: data.email,
    password: data.password,
  });

  return response;
}
