import { z } from 'zod';
import MESSAGE from '@/constants/Messages';
import REGEX from '@/constants/Regexs';

export interface Regex {
  password: RegExp;
  mobile: RegExp;
}

export interface Message {
  inputEmail: string;
  wrongEmail: string;
  inputPassword: string;
  inputPasswordCheck: string;
  unEqualPassword: string;
  inputName: string;
  inputMobile: string;
}

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
  password: z.string().min(8, { message: MESSAGE.inputPassword }).regex(REGEX.password, {
    message: MESSAGE.inputPassword,
  }),
});

export const signUpFormSchema = z
  .object({
    email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
    password: z.string().min(8, { message: MESSAGE.inputPassword }).max(15).regex(REGEX.password, {
      message: MESSAGE.inputPassword,
    }),
    passwordCheck: z.string().min(8, { message: MESSAGE.inputPasswordCheck }),
    name: z.string().min(1, { message: MESSAGE.inputName }),
    mobile: z.string().min(1, { message: MESSAGE.inputMobile }).regex(REGEX.mobile),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: MESSAGE.unEqualPassword,
  });

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  id: string;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputGroupProps = {
  id: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
