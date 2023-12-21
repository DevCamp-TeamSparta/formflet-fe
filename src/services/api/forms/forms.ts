import Cookies from 'universal-cookie';
import PATH from '@/constants/path/Path';
import Instance from '../Instance';

interface FormListProps {
  statusCode: number;
  message: string;
  data: FormList[];
}

export default async function forms(pageId: string) {
  const cookies = new Cookies();
  const authorization = cookies.get('authorization');
  const response = await Instance.get<FormListProps>(`${PATH.API.FORMS.FORM}/${pageId}`, {
    headers: { Authorization: `Bearer ${authorization}` },
  });

  return response;
}
