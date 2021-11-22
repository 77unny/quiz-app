import React, { ReactElement } from 'react';

import { DIFFICULTY } from '../../../../constants';
import Timer from '../../../atoms/timer';
import { ISaveData } from '../../../organisms/quiz/types';
import { Container, Row } from './style';

export default function Item({ item }: { item: ISaveData }): ReactElement {
  const { setDate, difficulty, questions, NumberOfCorrectAnswer, time } = item;
  const splitSetDate = setDate.split(' ');
  const [year, month, date] = splitSetDate;

  const itemDate = [year.replace('.', ''), month.replace('.', ''), date.replace('.', '')].join('-');

  return (
    <Container>
      <Row>
        <span>{itemDate}</span>
        <span>[{DIFFICULTY[difficulty].label}]</span>
      </Row>
      <Row>
        <span>소요 시간</span>
        <span>
          <Timer time={time} />
        </span>
      </Row>
      <Row>
        <span>정답 비율</span>
        <span>{((NumberOfCorrectAnswer / questions.length) * 100).toFixed(2)}%</span>
      </Row>
    </Container>
  );
}
