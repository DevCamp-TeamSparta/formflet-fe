import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * 아래와 같이 시작하는 것들을 제외한 모두 경로를 매치합니다:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default function middleware() {
  // const url = request.nextUrl.pathname;

  // const accessToken = request.cookies.get('access-token')?.value;
  // const refreshToken = request.cookies.get('refresh-token')?.value;

  // const loginUrl = new URL('/login', request.url);

  // console.log(request.cookies.get('access-token')?.value);

  // const newHeaders = new Headers(request.headers);
  // newHeaders.set('access-token', accessToken);
  // newHeaders.set('refresh-token', refreshToken);
  // console.log('Header : ', newHeaders);

  return NextResponse.next();
}
