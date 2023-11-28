import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MESSAGE from '../Messages';
import { JoinFormSchema, JoinGroup, LoginGroup, joinFormSchema } from '@/types/type';

export default function InputGroupArrays() {
  const {
    formState: { errors },
  } = useForm<JoinFormSchema>({
    resolver: zodResolver(joinFormSchema),
  });

  const JOIN_GROUP_PROPS: JoinGroup[] = [
    {
      id: 'email',
      type: 'text',
      placeholder: MESSAGE.inputEmail,
      errorMessage: errors.email?.message,
    },
    {
      id: 'password',
      type: 'password',
      placeholder: MESSAGE.inputPassword,
      errorMessage: errors.password?.message,
    },
    {
      id: 'checkPassword',
      type: 'password',
      placeholder: MESSAGE.inputcheckPassword,
      errorMessage: errors.checkPassword?.message,
    },
    {
      id: 'name',
      type: 'text',
      placeholder: MESSAGE.inputName,
      errorMessage: errors.name?.message,
    },
    {
      id: 'mobile',
      type: 'text',
      placeholder: MESSAGE.inputMobile,
      errorMessage: errors.mobile?.message,
    },
  ];

  const LOGIN_GROUP_PROPS: LoginGroup[] = [
    {
      id: 'email',
      type: 'text',
      placeholder: MESSAGE.inputEmail,
      errorMessage: errors.email?.message,
    },
    {
      id: 'password',
      type: 'password',
      placeholder: MESSAGE.inputPassword,
      errorMessage: errors.password?.message,
    },
  ];

  return { JOIN_GROUP_PROPS, LOGIN_GROUP_PROPS };
}
