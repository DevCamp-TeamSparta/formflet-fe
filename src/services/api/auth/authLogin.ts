import Instance from '../Instance';
import PATH from '@/constants/path/Path';
import { LoginFormSchema } from '@/types/type';

export default async function authLogin(data: LoginFormSchema) {
  const response = await Instance.post<AuthDataProps>(PATH.API.AUTH.LOGIN, {
    email: data.email,
    password: data.password,
  });

  return response;
}
