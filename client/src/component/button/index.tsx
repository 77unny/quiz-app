import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement, ReactNode } from 'react';

import { Button as StyledButton, PrimaryIcon } from './style';

export interface IButtonProps {
  buttonType?: 'default' | 'primary';
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ buttonType = 'default', disabled = false, children }: IButtonProps): ReactElement {
  return (
    <StyledButton buttonType={buttonType} disabled={disabled}>
      {children}
      {buttonType === 'primary' && <PrimaryIcon icon={faChevronRight} />}
    </StyledButton>
  );
}
