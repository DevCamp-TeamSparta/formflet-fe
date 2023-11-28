import { z } from 'zod';
import MESSAGE from '@/constants/Messages';
import REGEX from '@/constants/Regexs';

type JoinFormField = 'email' | 'password' | 'name' | 'checkPassword' | 'mobile';
type LoginFormField = 'email' | 'password';

export type Token = string | undefined;

export interface Regex {
  password: RegExp;
  mobile: RegExp;
}

export interface Message {
  inputEmail: string;
  wrongEmail: string;
  inputPassword: string;
  inputcheckPassword: string;
  unEqualPassword: string;
  inputName: string;
  inputMobile: string;
}

export type JoinGroup = {
  id: JoinFormField;
  type: string;
  placeholder: string;
  errorMessage: string | undefined;
};
export type LoginGroup = {
  id: LoginFormField;
  type: string;
  placeholder: string;
  errorMessage: string | undefined;
};

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
  password: z.string().min(8, { message: MESSAGE.inputPassword }).regex(REGEX.password, {
    message: MESSAGE.inputPassword,
  }),
});

export const joinFormSchema = z
  .object({
    email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
    password: z.string().min(8, { message: MESSAGE.inputPassword }).max(15).regex(REGEX.password, {
      message: MESSAGE.inputPassword,
    }),
    checkPassword: z.string().min(8, { message: MESSAGE.inputcheckPassword }),
    name: z.string().min(1, { message: MESSAGE.inputName }),
    mobile: z.string().min(1, { message: MESSAGE.inputMobile }).regex(REGEX.mobile),
  })
  .refine((data) => data.password === data.checkPassword, {
    path: ['checkPassword'],
    message: MESSAGE.unEqualPassword,
  });

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type JoinFormSchema = z.infer<typeof joinFormSchema>;
