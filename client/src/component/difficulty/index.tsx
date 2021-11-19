import React, { ReactElement } from 'react';

import { Container, RadioButtonLabel } from './style';
import { IDifficultyProps, IRadioButtonProps } from './types';

const RadioButton = ({ label, value, isChecked, handleChange }: IRadioButtonProps) => {
  const onChange = () => handleChange(value);
  return (
    <RadioButtonLabel>
      <input type="radio" value={value} checked={isChecked} onChange={onChange} />
      <span>{label}</span>
    </RadioButtonLabel>
  );
};

export default function Difficulty({ selectedDifficulty, difficulty, handleChange }: IDifficultyProps): ReactElement {
  return (
    <Container>
      {difficulty.map(({ label, value }) => (
        <RadioButton
          key={value}
          label={label}
          value={value}
          isChecked={selectedDifficulty === value}
          handleChange={handleChange}
        />
      ))}
    </Container>
  );
}
