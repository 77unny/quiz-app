import React, { ReactElement } from 'react';

import Timer from '../../../../atoms/timer';
import { TTable } from '../types';
import { Container, Row } from './style';

export default function Item({ item }: { item: TTable }): ReactElement {
  return (
    <Container>
      <Row>
        <span>{item.date}</span>
        <span>[{item.difficulty}]</span>
      </Row>
      <Row>
        <span>소요 시간</span>
        <span>
          <Timer time={item.time} />
        </span>
      </Row>
      <Row>
        <span>정답 비율</span>
        <span>{item.answers}%</span>
      </Row>
    </Container>
  );
}
