import { Regex } from '@/types/type';

const REGEX: Regex = Object.freeze({
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  mobile: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
  notionUrl: /^https:\/\/[a-zA-Z0-9-]+\.notion\.site\/[a-zA-Z0-9-]+[0-9a-fA-F]{32}\?pvs=\d+$/,
});

export default REGEX;
