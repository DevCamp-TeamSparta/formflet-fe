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
