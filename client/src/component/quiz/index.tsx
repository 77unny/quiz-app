import DOMPurify from 'dompurify';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY } from '../../constants';
import { setAnswer } from '../../store/quiz';
import { getQuizState } from '../../store/quiz/selectors';
import Button from '../button';
import Answers from './answer';
import { Container, Inner, Subject, Title } from './style';

export default function Quiz(): ReactElement {
  const dispatch = useDispatch();
  const { questions } = useSelector(getQuizState);

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectAnswer = (value: string) => {
    setSelectedAnswer(value);
    setSelected(false);
  };

  // 다음 문제 - 초기화 처리 | 정답 결과 리덕스에 저장
  const onClickNext = () => {
    setStep(prev => prev + 1);
    setSelected(true);
    setSelectedAnswer('');
    dispatch(setAnswer(questions[step].correct_answer === selectedAnswer));
  };

  return (
    <Container>
      {questions[step] ? (
        <>
          <Title>
            <span>
              <span>STEP{step + 1}.</span> QUIZ
            </span>
            <span>[{DIFFICULTY[questions[step].difficulty].label}]</span>
          </Title>
          <Inner>
            <Subject dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questions[step].question) }} />
            <Answers questions={questions[step]} selectedValue={selectedAnswer} handleChange={handleSelectAnswer} />
            <Button buttonType={'primary'} disabled={selected} onClick={onClickNext}>
              다음 문제
            </Button>
          </Inner>
        </>
      ) : (
        <span>초기화</span>
      )}
    </Container>
  );
}
