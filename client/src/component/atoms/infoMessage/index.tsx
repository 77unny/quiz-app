import DOMPurify from 'dompurify';
import React, { ReactElement } from 'react';

import { Container } from './style';
import { IInfoMessageProps } from './types';

export default React.memo(function InfoMessage({ align = 'left', children }: IInfoMessageProps): ReactElement {
  return <Container align={align} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(children) }} />;
});
