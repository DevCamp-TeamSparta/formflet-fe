import PATH from '@/constants/path/Path';
import { ReleaseInstance } from '../Instance';

export default async function formReply(formId: number, answer: Array<FormDataEntryValue[]>) {
  const response = await ReleaseInstance.post(`${PATH.API.FORMS.REPLY}/${formId}`, { answer });

  return response;
}
