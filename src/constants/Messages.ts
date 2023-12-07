const JOIN_LOGIN = Object.freeze({
  inputEmail: 'formflet@email.com',
  vaildEmail: '사용 가능한 이메일입니다.',
  inVaildEmail: '사용 불가능한 이메일입니다.',
  inVaildLogin: '아이디와 비밀번호를 확인해주세요.',
  inputPassword: '영문, 숫자, 특수문자 포함 8~15자',
  inputcheckPassword: '••••••••',
  unEqualPassword: '비밀번호가 일치하지 않습니다.',
  inputName: '김플렛',
  inputMobile: '01012345678',
});

const NOTION_DOMAIN = Object.freeze({
  inVaildNotion: '노션 링크를 확인해주세요.',
  inVaildDomain: '사용 불가능한 주소입니다.',
});

const MESSAGE = Object.freeze({
  JOIN_LOGIN,
  NOTION_DOMAIN,
});

export default MESSAGE;
