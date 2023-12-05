import MESSAGE from '../Messages';
import { JoinGroup, LoginGroup } from '@/types/type';

export default function InputGroupArrays() {
  const JOIN_GROUP_PROPS: JoinGroup[] = [
    {
      label: '이메일 아이디',
      id: 'email',
      type: 'text',
      placeholder: MESSAGE.inputEmail,
    },
    {
      label: '비밀번호',
      id: 'password',
      type: 'password',
      placeholder: MESSAGE.inputPassword,
    },
    {
      label: '비밀번호 확인',
      id: 'checkPassword',
      type: 'password',
      placeholder: MESSAGE.inputcheckPassword,
    },
    {
      label: '이름',
      id: 'name',
      type: 'text',
      placeholder: MESSAGE.inputName,
    },
    {
      label: '휴대폰',
      id: 'mobile',
      type: 'text',
      placeholder: MESSAGE.inputMobile,
    },
  ];

  const LOGIN_GROUP_PROPS: LoginGroup[] = [
    {
      label: '이메일 아이디',
      id: 'email',
      type: 'text',
      placeholder: MESSAGE.inputEmail,
    },
    {
      label: '비밀번호',
      id: 'password',
      type: 'password',
      placeholder: MESSAGE.inputPassword,
    },
  ];

  return { JOIN_GROUP_PROPS, LOGIN_GROUP_PROPS };
}
