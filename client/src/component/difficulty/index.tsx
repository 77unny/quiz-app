import React, { ReactElement } from 'react';

import { IDifficultyProps, IRadioButtonProps } from './types';

const RadioButton = ({ label, value, isChecked, handleChange }: IRadioButtonProps) => {
  const onChange = () => handleChange(value);
  return (
    <label>
      <span>{label}</span>
      <input type="radio" value={value} checked={isChecked} onChange={onChange} />
    </label>
  );
};

export default function Difficulty({ selectedDifficulty, difficulty, handleChange }: IDifficultyProps): ReactElement {
  return (
    <div>
      <p>난이도 선택</p>
      {difficulty.map(({ label, value }) => (
        <RadioButton
          key={value}
          label={label}
          value={value}
          isChecked={selectedDifficulty === value}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}
