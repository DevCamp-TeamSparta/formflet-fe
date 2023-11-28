const USERS = Object.freeze({
  join: '/users/join',
  checkemail: '/users/check-email',
});

const AUTH = Object.freeze({
  login: '/auth/login',
  reissue: '/auth/reissue',
});

const PAGES = Object.freeze({
  registerNotin: '/pages/register-notion',
  registerDomain: '/pages/register-domain',
});

const FORMS = Object.freeze({
  create: '/forms/create',
});

const API = Object.freeze({
  USERS,
  AUTH,
  PAGES,
  FORMS,
});

export default API;
