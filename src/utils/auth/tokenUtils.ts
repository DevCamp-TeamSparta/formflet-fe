import { AxiosResponse } from 'axios';
import Cookies from 'universal-cookie';
import { Token } from '@/types/type';

export default function tokenUtilsx() {
  async function getToken(res: AxiosResponse, name: string): Promise<Token> {
    const tokenString: Token = await res.headers[`${name}`];
    const token: Token = tokenString?.replace('Bearer ', '');

    return token;
  }

  function setTokenCookie(name: string, token: Token): void {
    const cookies = new Cookies();

    cookies.set(name, token, { path: '/' });
  }

  return { getToken, setTokenCookie };
}
