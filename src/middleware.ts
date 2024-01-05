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

const PRODUCTION_DOMAINS = ['www', 'test', 'localhost', '127', 'app'];

export default function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const subDomain = request.nextUrl.hostname.split('.')[0];

  if (PRODUCTION_DOMAINS.includes(subDomain)) {
    if (pathName === PATH.ROUTE.ROOT && (subDomain === 'app' || subDomain === 'www')) {
      return NextResponse.redirect('https://www.formflet.site');
    }
  } else if (pathName === PATH.ROUTE.ROOT) {
    return NextResponse.rewrite(new URL(`/page/${subDomain}`, request.url));
  }

  return NextResponse.next();
}
