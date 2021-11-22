import React, { ReactElement } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import Intro from './component/organisms/intro';
import Quiz from './component/organisms/quiz';
import { setIsOpen } from './store/modal';
import { getModalState } from './store/modal/selector';
import { getQuizState } from './store/quiz/selectors';
import { AppContainer } from './style';

export default function App(): ReactElement {
  const dispatch = useDispatch();
  const { progress } = useSelector(getQuizState);
  const { isOpen } = useSelector(getModalState);

  const onRequestClose = () => dispatch(setIsOpen(false));

  return (
    <AppContainer>
      {progress ? <Quiz /> : <Intro />}
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} children={'This is Modal content'} />
    </AppContainer>
  );
}
