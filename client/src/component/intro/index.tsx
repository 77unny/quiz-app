import React, { ReactElement, useState } from 'react';

import { DIFFICULTY } from '../../constants';
import { TValue } from '../../constants/types';
import Button from '../button';
import Difficulty from '../difficulty';
import { Container, Title } from './style';

export default function Intro(): ReactElement {
  const [selectedDifficulty, setDifficulty] = useState<TValue>('random');

  const difficulty = Object.values(DIFFICULTY);
  const handleDifficulty = (value: TValue) => setDifficulty(value);

  return (
    <Container>
      <Title>
        클래스팅 프론트엔드 과제
        <span>퀴즈를 풀어보세요!</span>
      </Title>
      <Difficulty selectedDifficulty={selectedDifficulty} difficulty={difficulty} handleChange={handleDifficulty} />
      <Button buttonType={'primary'} children={'퀴즈 풀기'} />
    </Container>
  );
}
