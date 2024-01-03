import { z } from 'zod';
import MESSAGE from '@/constants/Messages';
import REGEX from '@/constants/Regexs';

type JoinFormField = 'email' | 'password' | 'name' | 'checkPassword' | 'mobile' | 'job';
type LoginFormField = 'email' | 'password';

export type Token = string | undefined;

export interface Regex {
  password: RegExp;
  mobile: RegExp;
  notionUrl: RegExp;
}

export interface OnClickProps {
  onClick: () => Promise<void>;
}

export interface SetStateBoolean {
  setStateBoolean: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SetStateString {
  setStateString: React.Dispatch<React.SetStateAction<string>>;
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
  email: z
    .string()
    .min(1, { message: MESSAGE.JOIN_LOGIN.inVaildLogin })
    .email(MESSAGE.JOIN_LOGIN.inVaildEmail),
  password: z.string().min(8, { message: MESSAGE.JOIN_LOGIN.inVaildLogin }).regex(REGEX.password, {
    message: MESSAGE.JOIN_LOGIN.inputPassword,
  }),
});

export const joinFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: MESSAGE.JOIN_LOGIN.inVaildEmail })
      .email(MESSAGE.JOIN_LOGIN.inVaildEmail),
    password: z
      .string()
      .min(8, { message: MESSAGE.JOIN_LOGIN.inputPassword })
      .max(15)
      .regex(REGEX.password, {
        message: MESSAGE.JOIN_LOGIN.inputPassword,
      }),
    checkPassword: z.string().min(8, { message: MESSAGE.JOIN_LOGIN.unEqualPassword }),
    name: z.string().min(1, { message: MESSAGE.JOIN_LOGIN.inputName }),
    mobile: z.string().min(1, { message: MESSAGE.JOIN_LOGIN.inputMobile }).regex(REGEX.mobile),
    job: z.string(),
  })
  .refine((data) => data.password === data.checkPassword, {
    path: ['checkPassword'],
    message: MESSAGE.JOIN_LOGIN.unEqualPassword,
  });

export const pageUrlFormSchema = z.object({
  title: z.string().min(1),
  domain: z.string().min(1, { message: MESSAGE.NOTION_DOMAIN.inVaildDomain }),
  url: z.string().min(1, { message: MESSAGE.NOTION_DOMAIN.inVaildNotion }).regex(REGEX.notionUrl),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type JoinFormSchema = z.infer<typeof joinFormSchema>;
export type PageUrlFormSchema = z.infer<typeof pageUrlFormSchema>;
