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

const PRODUCTION_DOMAINS = ['www', 'test', 'localhost', '127'];

export default function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const subDomain = request.nextUrl.hostname.split('.')[0];
  if (PRODUCTION_DOMAINS.includes(subDomain)) {
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
  } else {
    return NextResponse.rewrite(new URL(`/form/${subDomain}`, request.url));
  }

  return NextResponse.next();
}
