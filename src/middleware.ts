import { NextRequest, NextResponse } from 'next/server';
import PATH from './constants/path/Path';

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

export default function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const accessToken = request.cookies.get('authorization')?.value;

  const rootUrl = new URL(PATH.ROUTE.ROOT, request.url);
  const loginUrl = new URL(PATH.ROUTE.LOGIN, request.url);
  const myPageUrl = new URL(PATH.ROUTE.MYPAGE, request.url);

  if (pathName.startsWith(PATH.ROUTE.MYPAGE) && !accessToken) {
    return NextResponse.redirect(loginUrl);
  }

  if (
    (pathName.startsWith(PATH.ROUTE.LOGIN) || pathName.startsWith(PATH.ROUTE.JOIN)) &&
    accessToken
  ) {
    return NextResponse.redirect(rootUrl);
  }

  if (pathName === PATH.ROUTE.ROOT && accessToken) {
    return NextResponse.redirect(myPageUrl);
  }

  if (pathName.includes('/release')) {
    // console.log(pathName);
  }

  return NextResponse.next();
}
