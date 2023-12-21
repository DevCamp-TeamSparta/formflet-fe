import { AxiosResponse } from 'axios';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';
import { JoinFormSchema } from '@/types/type';

export default async function userJoin(data: JoinFormSchema): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.post(PATH.API.USERS.JOIN, {
    email: data.email,
    password: data.password,
    name: data.name,
    mobile: data.mobile,
    job: data.job,
  });

  return response;
}
