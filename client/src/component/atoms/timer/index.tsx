import React, { ReactElement } from 'react';

import { Container } from './style';

export default function Timer({ time }: { time: number }): ReactElement {
  const min =
    Math.floor(time / 60) < 10
      ? '0' +
        Math.floor(time / 60)
          .toString()
          .slice(-2)
      : Math.floor(time / 60);
  const sec = time % 60 < 10 ? '0' + (time % 60).toString().slice(-2) : time % 60;
  return (
    <Container>
      [진행 시간] <span children={`${min}:${sec}`} />
    </Container>
  );
}
