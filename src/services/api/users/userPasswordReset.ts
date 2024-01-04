import Instance from '../Instance';
import PATH from '@/constants/path/Path';

interface ResetPasswordProps {
  email: string;
  password: string | undefined;
}

export default async function userPasswordReset(data: ResetPasswordProps) {
  const response = await Instance.patch(PATH.API.USERS.PASSWORD_RESET, {
    email: data.email,
    password: data.password,
  });

  return response;
}
