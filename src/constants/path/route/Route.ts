const RANDING = 'https://www.formflet.site';

const ROOT = '/';

const JOIN = '/join';

const LOGIN = '/login';

const PASSWORD = '/password';

const MYPAGE = '/mypage';

const DATA = '/mypage/data';

const RULES = '/mypage/rules';

const INFO = '/mypage/info';

const EDIT = '/mypage/edit';

const NAV_LIST = [
  { href: MYPAGE, text: '나의 웹페이지' },
  { href: DATA, text: '데이터 모아보기' },
  { href: RULES, text: '가격 정책' },
  { href: INFO, text: '마이페이지' },
];

const ROUTE = Object.freeze({
  RANDING,
  ROOT,
  JOIN,
  DATA,
  LOGIN,
  MYPAGE,
  PASSWORD,
  NAV_LIST,
  EDIT,
});

export default ROUTE;
