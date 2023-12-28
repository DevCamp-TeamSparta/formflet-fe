import Instance from '../Instance';
import PATH from '@/constants/path/Path';
import { LoginFormSchema } from '@/types/type';

interface DataToken {
  accessToken: string;
}

interface LoginData {
  data: DataToken;
}

export default async function authLogin(data: LoginFormSchema) {
  const response = await Instance.post<LoginData>(PATH.API.AUTH.LOGIN, {
    email: data.email,
    password: data.password,
  });

  return response;
}
