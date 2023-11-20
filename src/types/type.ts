import { z } from 'zod';
import MESSAGE from '@/constants/Messages';
import REGEX from '@/constants/Regexs';

export interface Regex {
  password: RegExp;
  phone: RegExp;
}

export interface Message {
  inputEmail: string;
  wrongEmail: string;
  inputPassword: string;
  inputPasswordCheck: string;
  unEqualPassword: string;
  inputName: string;
  inputPhone: string;
}

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
  password: z.string().min(8, { message: MESSAGE.inputPassword }).regex(REGEX.password, {
    message: MESSAGE.inputPassword,
  }),
});

export const signUpFormSchema = z
  .object({
    email: z.string().min(1, { message: MESSAGE.inputEmail }).email(MESSAGE.wrongEmail),
    password: z.string().min(1, { message: MESSAGE.inputPassword }).regex(REGEX.password, {
      message: MESSAGE.inputPassword,
    }),
    passwordCheck: z.string().min(1, { message: MESSAGE.inputPasswordCheck }),
    name: z.string().min(1, { message: MESSAGE.inputName }),
    phone: z.string().min(1, { message: MESSAGE.inputPhone }).regex(REGEX.phone),
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
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
