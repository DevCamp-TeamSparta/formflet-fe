import { AxiosResponse } from 'axios';
import Instance from '../Instance';
import PATH from '@/constants/path/Path';

export default async function pageContent(path: string): Promise<object> {
  const response: AxiosResponse = await Instance.get(`${PATH.API.PAGES.page}/${path}`);
  const result = {
    content: '',
    domain: '',
  };
  console.log('edit page : ', response.data);

  if (response) {
    const { content } = response.data.data.editPage;
    const domainString: string = response.data.data.pageUrl;
    const url = new URL(domainString);
    const domain = url.hostname.split('.')[0];

    result.content = content;
    result.domain = domain;
  }

  return result;
}
