import { Message } from '@/types/type';

const MESSAGE: Message = Object.freeze({
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

export default MESSAGE;
