import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY } from '../../constants';
import { TValue } from '../../constants/types';
import useRequest from '../../hooks/useRequest';
import { setDifficulty, setProgress, setQuestions } from '../../store/quiz';
import { getQuizState } from '../../store/quiz/selectors';
import { TQuestion } from '../../store/quiz/types';
import Button from '../button';
import Difficulty from '../difficulty';
import { Container, InfoMessage, Title } from './style';

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
  const handleDifficulty = useCallback((value: TValue) => {
    dispatch(setDifficulty(value));
  }, []);

  const handlePlayQuiz = () => {
    dispatch(setProgress(true));
  };

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
      <InfoMessage>
        <span>{DIFFICULTY[selectedDifficulty].label}</span> 난이도를 선택하셨습니다.
      </InfoMessage>
      <Button onClick={handlePlayQuiz} buttonType={'primary'} children={'퀴즈 풀기'} />
    </Container>
  );
}
