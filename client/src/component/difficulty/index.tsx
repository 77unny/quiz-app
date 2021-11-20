import React, { ReactElement } from 'react';

import RadioButton from '../radioButton';
import { Container } from './style';
import { IDifficultyProps } from './types';

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
