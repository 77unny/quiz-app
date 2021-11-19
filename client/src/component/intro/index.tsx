import React, { ReactElement, useState } from 'react';

import { difficulty } from '../../constants';
import { TValue } from '../../constants/types';
import Difficulty from '../difficulty';

export default function Intro(): ReactElement {
  const [selectedDifficulty, setDifficulty] = useState<TValue>('random');

  const handleDifficulty = (value: TValue) => setDifficulty(value);

  return (
    <div>
      <h2>퀴즈를 풀어보세요!</h2>
      <Difficulty selectedDifficulty={selectedDifficulty} difficulty={difficulty} handleChange={handleDifficulty} />
      <button>퀴즈 풀기</button>
    </div>
  );
}
