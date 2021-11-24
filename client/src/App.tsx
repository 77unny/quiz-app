import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import History from './component/molecules/history';
import Intro from './component/organisms/intro';
import Quiz from './component/organisms/quiz';
import { MODAL_STYLE_OPTION } from './constants';
import { setIsOpen } from './store/modal';
import { getModalState } from './store/modal/selector';
import { getQuizState } from './store/quiz/selectors';
import { AppContainer, Modal } from './style';

export default function App(): ReactElement {
  const dispatch = useDispatch();
  const { progress } = useSelector(getQuizState);
  const { isOpen } = useSelector(getModalState);

  const onRequestClose = () => dispatch(setIsOpen(false));

  return (
    <AppContainer>
      {progress ? <Quiz /> : <Intro />}
      <Modal style={MODAL_STYLE_OPTION} isOpen={isOpen} onRequestClose={onRequestClose} children={<History />} />
    </AppContainer>
  );
}
