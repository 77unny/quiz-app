import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setElapsedTime } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import { setTime } from '../../../store/timer';
import { getTimeState } from '../../../store/timer/selector';
import { timeCalculator } from '../../../utils';
import { Container } from './style';

export default React.memo(function Timer({ prefix }: { prefix?: string }): ReactElement {
  const dispatch = useDispatch();
  const { time } = useSelector(getTimeState);
  const { finished } = useSelector(getQuizState);
  const [timer, setTimer] = useState(0);
  const timeRef = useRef(timer);
  const { min, sec } = timeCalculator(timer);

  useEffect(() => {
    timeRef.current = setTimeout(() => setTimer(timer + 1), 1000) as unknown as number;

    return () => {
      dispatch(setTime(timer));
      clearTimeout(timeRef.current);
    };
  }, [timer]);

  useEffect(() => {
    if (finished) {
      dispatch(setElapsedTime(time));
      clearTimeout(timeRef.current);
    }
  }, [timer, time, finished]);

  return (
    <Container>
      {prefix && <span>{prefix} </span>}
      <span children={`${min}:${sec}`} />
    </Container>
  );
});
