import React from 'react';

import { Container } from './style';
import { IRadioButtonProps } from './types';

export default function RadioButton<T>({ label, value, isChecked, handleChange }: IRadioButtonProps<T>) {
  const onChange = () => handleChange(value);
  return (
    <Container>
      <input type="radio" value={value} checked={isChecked} onChange={onChange} />
      <span>{label}</span>
    </Container>
  );
}
