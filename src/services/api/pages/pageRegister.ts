import { AxiosResponse } from 'axios';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';
import { PageUrlFormSchema } from '@/types/type';

export default async function pageRegister(data: PageUrlFormSchema): Promise<AxiosResponse> {
  const response: AxiosResponse = await Instance.post(PATH.API.PAGES.registerPage, {
    title: data.title,
    customDomain: data.customDomain,
    pageUrl: data.pageUrl,
  });

  return response;
}
