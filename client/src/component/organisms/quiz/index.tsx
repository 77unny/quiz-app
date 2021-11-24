import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { getQuizState } from '../../../store/quiz/selectors';
import Board from '../../molecules/board';
import Finish from '../../molecules/finish';
import { Container } from './style';

export default function Quiz(): ReactElement {
  const { questions, step } = useSelector(getQuizState);

  return <Container>{questions[step] ? <Board /> : <Finish />}</Container>;
}
