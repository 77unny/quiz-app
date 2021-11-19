import { ReactNode } from 'react';

export interface IButtonProps {
  buttonType?: 'default' | 'primary';
  disabled?: boolean;
  children: ReactNode;
}
