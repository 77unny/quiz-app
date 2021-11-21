import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import Intro from './component/organisms/intro';
import Quiz from './component/organisms/quiz';
import { getQuizState } from './store/quiz/selectors';
import { AppContainer } from './style';

export default function App(): ReactElement {
  const { progress } = useSelector(getQuizState);
  return <AppContainer>{progress ? <Quiz /> : <Intro />}</AppContainer>;
}
