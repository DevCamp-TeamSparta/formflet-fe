import { FieldErrors, UseFormGetValues } from 'react-hook-form';
import { JobList, JoinFormSchema } from './type';

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
  errors?: FieldErrors;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type JoinGroupProps = {
  id: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  errors?: FieldErrors;
  getValues: UseFormGetValues<JoinFormSchema>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type DropDownProps = {
  items: JobList[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type DropDownGroupProps = {
  id: string;
  label?: string;
  errorMessage?: string;
  items: JobList[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;
