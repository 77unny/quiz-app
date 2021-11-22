import React, { ReactElement } from 'react';

import { Container } from './style';

export default function Timer({ prefix, time }: { prefix?: string; time: number }): ReactElement {
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
      {prefix && <span>{prefix} </span>}
      <span children={`${min}:${sec}`} />
    </Container>
  );
}
