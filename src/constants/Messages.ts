interface Message {
  inputEmail: string;
  wrongEmail: string;
  inputPassword: string;
  inputPasswordAgain: string;
  unEqualPassword: string;
  inputName: string;
  inputPhone: string;
}

const MESSAGE: Message = Object.freeze({
  inputEmail: '이메일을 입력하세요',
  wrongEmail: '이메일 형식으로 입력해주세요.',
  inputPassword: '비밀번호는 영문/숫자/특수문자 조합으로 8~15자리 입니다.',
  inputPasswordAgain: '비밀번호를 다시 입력해주세요',
  unEqualPassword: '비밀번호가 일치하지 않습니다.',
  inputName: '이름을 입력하세요',
  inputPhone: '-을 포함하여 전화번호를 입력하세요.',
});

export default MESSAGE;
