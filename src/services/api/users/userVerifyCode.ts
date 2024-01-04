import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

interface VerifyCodeProps {
  email: string;
  code: number | undefined;
}

export default async function userVerifyCode(data: VerifyCodeProps): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.put(PATH.API.USERS.VERIFY_CODE, {
    email: data.email,
    code: data.code,
  });

  return response;
}
