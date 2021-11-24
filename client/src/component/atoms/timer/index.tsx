import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTime as storeSetTime } from '../../../store/timer';
import { timeCalculator } from '../../../utils';
import { Container } from './style';

export default React.memo(function Timer({ prefix }: { prefix?: string }): ReactElement {
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);
  const { min, sec } = timeCalculator(time);

  useEffect(() => {
    timeRef.current = setTimeout(() => setTime(time + 1), 1000) as unknown as number;

    return () => {
      dispatch(storeSetTime(time));
      clearTimeout(timeRef.current);
    };
  }, [time]);

  return (
    <Container>
      {prefix && <span>{prefix} </span>}
      <span children={`${min}:${sec}`} />
    </Container>
  );
});
