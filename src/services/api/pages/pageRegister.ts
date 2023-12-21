import Cookies from 'universal-cookie';
import { AxiosResponse } from 'axios';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';
import { PageUrlFormSchema } from '@/types/type';

export default async function pageRegister(
  data: PageUrlFormSchema & { content: string },
): Promise<AxiosResponse<{ data: Page }>> {
  const cookies = new Cookies();
  const authorization = cookies.get('authorization');
  const response: AxiosResponse = await Instance.post(
    PATH.API.PAGES.REGISTER_PAGE,
    {
      title: data.title,
      domain: data.domain,
      url: data.url,
      content: data.content,
    },
    {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    },
  );
  return response;
}
