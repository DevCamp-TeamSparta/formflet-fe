const USERS = Object.freeze({
  join: '/api/users/join',
  checkemail: '/api/users/check-email',
});

const AUTH = Object.freeze({
  login: '/api/auth/login',
  logout: '/api/auth/logout',
  reissue: '/api/auth/reissue',
});

const PAGES = Object.freeze({
  registerPage: '/api/pages/register',
  notionList: '/api/pages',
  page: '/api/pages',
  edit: '/api/pages/edit',
});

const FORMS = Object.freeze({
  create: '/api/forms/create',
});

const API = Object.freeze({
  USERS,
  AUTH,
  PAGES,
  FORMS,
});

export default API;
