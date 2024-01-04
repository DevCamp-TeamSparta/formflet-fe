const USERS = Object.freeze({
  JOIN: '/api/users/join',
  VERIFY_EMAIL: '/api/users/verify-email',
  VERIFY_CODE: '/api/users/verify-code',
});

const AUTH = Object.freeze({
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  REISSUE: '/api/auth/reissue',
});

const PAGES = Object.freeze({
  REGISTER_PAGE: '/api/pages/register',
  NOTION_LIST: '/api/pages',
  PAGE: '/api/pages',
  EDIT: '/api/pages/edit',
  RELEASE: '/api/pages/release',
});

const FORMS = Object.freeze({
  FORM: '/api/forms',
  REPLY: '/api/forms/reply',
});

const API = Object.freeze({
  USERS,
  AUTH,
  PAGES,
  FORMS,
});

export default API;
