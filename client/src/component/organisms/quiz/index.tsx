import DOMPurify from 'dompurify';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY, QUIZ_MESSAGE } from '../../../constants';
import { setAnswer } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import Button from '../../atoms/button';
import InfoMessage from '../../atoms/infoMessage';
import Timer from '../../atoms/timer';
import Answers from '../../molecules/answer';
import { Container, Inner, Subject, Title } from './style';

export default function Quiz(): ReactElement {
  const dispatch = useDispatch();
  const { questions } = useSelector(getQuizState);

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);

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

  useEffect(() => {
    timeRef.current = setInterval(() => setTime(time + 1), 1000) as unknown as number;
    return () => clearInterval(timeRef.current);
  }, [time]);

  useEffect(() => {
    if (!questions[step]) clearInterval(timeRef.current);
  }, [step]);

  return (
    <Container>
      <Timer time={time} />
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
            <InfoMessage
              align={'center'}
              children={
                QUIZ_MESSAGE[
                  selectedAnswer === ''
                    ? 'empty'
                    : questions[step].correct_answer === selectedAnswer
                    ? 'correct'
                    : 'incorrect'
                ]
              }
            />
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
