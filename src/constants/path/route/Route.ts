const ROOT = '/';

const JOIN = '/join';

const LOGIN = '/login';

const LOGOUT = '/';

const EDIT_PASSWORD = '/editpasswod';

const MYWEBPAGE = '/mywebpage';

const RULES = '/rules';

const MYPAGE = '/mypage';

const NAV_LIST = [
  { href: MYWEBPAGE, text: '나의 웹페이지' },
  { href: RULES, text: '가격 정책' },
  { href: MYPAGE, text: '마이페이지' },
  { href: LOGOUT, text: '로그아웃' },
];

const ROUTE = Object.freeze({
  ROOT,
  JOIN,
  LOGIN,
  MYWEBPAGE,
  EDIT_PASSWORD,
  NAV_LIST,
});

export default ROUTE;
