import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement, ReactNode } from 'react';

import { Button as StyledButton, PrimaryIcon } from './style';
import { IButtonProps } from './types';

export default function Button({
  buttonType = 'default',
  size = 'default',
  disabled = false,
  onClick,
  children,
}: IButtonProps): ReactElement {
  return (
    <StyledButton buttonType={buttonType} size={size} disabled={disabled} onClick={onClick}>
      {children}
      {buttonType === 'primary' && <PrimaryIcon icon={faChevronRight} />}
    </StyledButton>
  );
}
