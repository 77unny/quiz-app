import DOMPurify from 'dompurify';
import React, { ReactElement } from 'react';

import { Container } from './style';

export default function InfoMessage({
  align = 'left',
  children,
}: {
  align?: 'left' | 'center' | 'right';
  children: string;
}): ReactElement {
  return <Container align={align} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />;
}
