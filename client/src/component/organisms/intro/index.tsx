import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY } from '../../../constants';
import useRequest from '../../../hooks/useRequest';
import { setIsOpen } from '../../../store/modal';
import { setDifficulty, setProgress, setQuestions } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import { TQuestion } from '../../../store/quiz/types';
import Button from '../../atoms/button';
import InfoMessage from '../../atoms/infoMessage';
import Difficulty from '../../molecules/difficulty';
import { ButtonWrap, Container, Title } from './style';

export default function Intro(): ReactElement {
  const dispatch = useDispatch();
  const { difficulty: selectedDifficulty } = useSelector(getQuizState);

  const API = useMemo(() => {
    return selectedDifficulty === 'random'
      ? process.env.REACT_APP_API
      : `${process.env.REACT_APP_API as string}&difficulty=${selectedDifficulty}`;
  }, [selectedDifficulty]);

  const { data } = useRequest<{ response_code: number; results: TQuestion[] }>({
    url: API,
  });

  const difficulty = Object.values(DIFFICULTY);
  const handleDifficulty = useCallback((value: string) => {
    dispatch(setDifficulty(value));
  }, []);

  const handlePlayQuiz = () => dispatch(setProgress(true));
  const onClickModal = () => dispatch(setIsOpen(true));

  useEffect(() => {
    if (data) dispatch(setQuestions(data.results));
  }, [data]);

  return (
    <Container>
      <Title>
        클래스팅 프론트엔드 과제
        <span>퀴즈를 풀어보세요!</span>
      </Title>
      <Difficulty selectedDifficulty={selectedDifficulty} difficulty={difficulty} handleChange={handleDifficulty} />
      <InfoMessage children={`<span>${DIFFICULTY[selectedDifficulty].label}</span> 난이도를 선택하셨습니다`} />
      {/*
        Todo : onClick 시에 데이터 패치를해서 화면 전환 시키자.
        - 현재는 로딩시 불러오는데 화면이 보이자마자 버튼을 누르면 없는데이터라 에러뜸
        - 그래서 일단 임시로 disabled={!data} 와 같이 해둠..
        - 이렇게 해두니까 일단은 괜찮은데 난이도 선택시 UI 스타일이 변하는게 조금 ... 불편..
        - 그래서 핸들러에 데이터 패치를 해두자!
      */}
      <ButtonWrap>
        <Button
          onClick={handlePlayQuiz}
          buttonType={'primary'}
          children={!data ? '로딩중...' : '퀴즈 풀기'}
          disabled={!data}
        />
        <Button size={'small'} onClick={onClickModal} children={'기록보기'} />
      </ButtonWrap>
    </Container>
  );
}
