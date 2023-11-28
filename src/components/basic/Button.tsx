import { ButtonProps } from '@/types/typeProps';

export default function Button({ children, disabled, ...rest }: ButtonProps) {
  return (
    <button type="button" disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
