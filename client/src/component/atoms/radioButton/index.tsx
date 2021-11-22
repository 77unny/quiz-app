import DOMPurify from 'dompurify';
import React, { ReactElement } from 'react';

import { Container } from './style';
import { IRadioButtonProps } from './types';

export default function RadioButton({ label, value, isChecked, handleChange }: IRadioButtonProps): ReactElement {
  const onChange = () => handleChange(value);
  return (
    <Container>
      <input type="radio" value={value} checked={isChecked} onChange={onChange} />
      <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(label) }} />
    </Container>
  );
}
