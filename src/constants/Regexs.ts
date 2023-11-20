interface Regex {
  password: RegExp;
  phone: RegExp;
}

const REGEX: Regex = Object.freeze({
  password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
  phone: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
});

export default REGEX;
