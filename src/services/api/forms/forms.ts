import PATH from '@/constants/path/Path';
import Instance from '../Instance';

interface FormListProps {
  statusCode: number;
  message: string;
  data: FormList[];
}

export default async function forms(pageId: string) {
  const response = await Instance.get<FormListProps>(`${PATH.API.FORMS.FORM}/${pageId}`);

  return response;
}
