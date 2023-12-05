import { z } from 'zod';
import MESSAGE from '@/constants/Messages';
import REGEX from '@/constants/Regexs';

type JoinFormField = 'email' | 'password' | 'name' | 'checkPassword' | 'mobile' | 'job';
type LoginFormField = 'email' | 'password';

export type Token = string | undefined;

export interface Regex {
  password: RegExp;
  mobile: RegExp;
}

export interface Message {
  inputEmail: string;
  vaildEmail: string;
  inVaildEmail: string;
  inVaildLogin: string;
  inputPassword: string;
  inputcheckPassword: string;
  unEqualPassword: string;
  inputName: string;
  inputMobile: string;
}

export interface StateSetBoolean {
  setJoinButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export type JoinGroup = {
  label: string;
  id: JoinFormField;
  type: string;
  placeholder: string;
};

export type LoginGroup = {
  label: string;
  id: LoginFormField;
  type: string;
  placeholder: string;
};

export type JobList = {
  id: string;
  value: string;
};

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: MESSAGE.inVaildLogin }).email(MESSAGE.inVaildEmail),
  password: z.string().min(8, { message: MESSAGE.inVaildLogin }).regex(REGEX.password, {
    message: MESSAGE.inputPassword,
  }),
});

export const joinFormSchema = z
  .object({
    email: z.string().min(1, { message: MESSAGE.inVaildEmail }).email(MESSAGE.inVaildEmail),
    password: z.string().min(8, { message: MESSAGE.inputPassword }).max(15).regex(REGEX.password, {
      message: MESSAGE.inputPassword,
    }),
    checkPassword: z.string().min(8, { message: MESSAGE.unEqualPassword }),
    name: z.string().min(1, { message: MESSAGE.inputName }),
    mobile: z.string().min(1, { message: MESSAGE.inputMobile }).regex(REGEX.mobile),
    job: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    path: ['checkPassword'],
    message: MESSAGE.unEqualPassword,
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type JoinFormSchema = z.infer<typeof joinFormSchema>;
