import { ReactNode } from 'react';

export interface IButtonProps {
  buttonType?: 'default' | 'primary';
  size?: 'default' | 'large' | 'middle' | 'small';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}
