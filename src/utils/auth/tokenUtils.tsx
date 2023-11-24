import { AxiosResponse } from 'axios';

async function getToken(res: AxiosResponse, name: string): Promise<string | undefined> {
  const tokenString: string | undefined = await res.headers.get?.(`${name}`);
  const token: string | undefined = tokenString?.split(' ')[1];
  return token;
}

export default getToken;
