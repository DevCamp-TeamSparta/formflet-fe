import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageContent(path: string) {
  const response: AxiosResponse<{ data: Page }> = await Instance.get(
    `${PATH.API.PAGES.page}/${path}`,
  );
  const result = {
    content: '',
    domain: '',
  };

  if (response) {
    const { data } = response.data;
    const { content } = data.pageContent;
    const domainString: string = data.pageUrl;
    const url = new URL(domainString);

    result.content = content;
    result.domain = url.hostname;
  }

  return result;
}
