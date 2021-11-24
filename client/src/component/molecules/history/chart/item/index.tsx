import React, { ReactElement } from 'react';

import { timeCalculator } from '../../../../../utils';
import { TTable } from '../types';
import { Container, Row } from './style';

export default function Item({ item }: { item: TTable }): ReactElement {
  const { min, sec } = timeCalculator(item.time);
  return (
    <Container>
      <Row>
        <span>{item.date}</span>
        <span>[{item.difficulty}]</span>
      </Row>
      <Row>
        <span>소요 시간</span>
        <span>{`${min}:${sec}`}</span>
      </Row>
      <Row>
        <span>정답 비율</span>
        <span>{item.answers}%</span>
      </Row>
    </Container>
  );
}
