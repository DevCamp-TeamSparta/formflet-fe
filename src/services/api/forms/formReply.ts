import PATH from '@/constants/path/Path';
import Instance from '../Instance';

export default async function formReply(formId: number, data: Array<FormDataEntryValue[]>) {
  const response = await Instance.post(`${PATH.API.FORMS.reply}/${formId}`, data);

  return response;
}
