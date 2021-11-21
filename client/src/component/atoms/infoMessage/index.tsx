import React, { ReactElement, ReactNode } from 'react';

import { Container } from './style';

export default function InfoMessage({
  align = 'left',
  children,
}: {
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
}): ReactElement {
  return <Container align={align} children={children} />;
}
