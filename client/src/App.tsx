import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import Intro from './component/intro';
import { getQuizState } from './store/quiz/selectors';
import { AppContainer } from './style';

export default function App(): ReactElement {
  const { progress } = useSelector(getQuizState);
  return <AppContainer>{progress ? <div>게임판</div> : <Intro />}</AppContainer>;
}
