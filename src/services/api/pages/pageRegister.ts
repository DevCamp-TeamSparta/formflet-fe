import { AxiosResponse } from 'axios';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';
import { PageUrlFormSchema } from '@/types/type';

export default async function pageRegister(
  data: PageUrlFormSchema & { content: string },
): Promise<AxiosResponse<{ data: Page }>> {
  const response: AxiosResponse = await Instance.post(PATH.API.PAGES.REGISTER_PAGE, {
    title: data.title,
    domain: data.domain,
    url: data.url,
    content: data.content,
  });
  return response;
}
