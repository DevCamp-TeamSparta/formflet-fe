import { AxiosResponse } from 'axios';
import { Token } from '@/types/type';

async function getToken(res: AxiosResponse, name: string): Promise<Token> {
  const tokenString: Token = await res.headers[`${name}`];
  const token: Token = tokenString?.split(' ')[1];
  return token;
}

export default getToken;
