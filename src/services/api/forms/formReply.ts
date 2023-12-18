import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default async function formReply(domain: string, data: FormData) {
  const response = await Instance.post(`${PATH.API.FORMS.reply}/${domain}`, { data });

  return response;
}
