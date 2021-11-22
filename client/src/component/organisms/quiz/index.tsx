import DOMPurify from 'dompurify';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY, QUIZ_MESSAGE } from '../../../constants';
import { reset, setAnswer, setProgress } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import { saveToLocalstorage } from '../../../utils';
import Button from '../../atoms/button';
import InfoMessage from '../../atoms/infoMessage';
import Timer from '../../atoms/timer';
import Answers from '../../molecules/answer';
import { ButtonWrap, Container, Inner, ResultInfo, Subject, Title } from './style';

export default function Quiz(): ReactElement {
  const dispatch = useDispatch();
  const { questions, difficulty, NumberOfCorrectAnswer, NumberOfIncorrectAnswer } = useSelector(getQuizState);

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

  const onClickReset = () => {
    dispatch(setProgress(false));
    dispatch(reset());
  };

  useEffect(() => {
    timeRef.current = setInterval(() => setTime(time + 1), 1000) as unknown as number;
    return () => clearInterval(timeRef.current);
  }, [time]);

  // 퀴즈 종료 - 타이머 종료 및 저장 | 기록 저장
  useEffect(() => {
    if (!questions[step]) {
      clearInterval(timeRef.current);
      const setDate = new Date().toLocaleString();
      const saveData = [{ setDate, questions, difficulty, NumberOfCorrectAnswer, NumberOfIncorrectAnswer, time }];
      saveToLocalstorage('quiz', saveData);
    }
  }, [step]);

  return (
    <Container>
      {questions[step] ? (
        <>
          <Timer time={time} prefix={'[진행 시간]'} />
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
        <>
          <Inner ended={true}>
            <Subject children={'클래스팅 퀴즈 종료! 수고하셨습니다 🥳'} />
            <ResultInfo>
              <li>
                <span>난이도</span>
                <span>{DIFFICULTY[difficulty].label}</span>
              </li>
              <li>
                <span>소요 시간</span>
                <span>
                  <Timer time={time} />
                </span>
              </li>
              <li>
                <span>정답 개수</span>
                <span>{NumberOfCorrectAnswer}</span>
              </li>
              <li>
                <span>오답 수</span>
                <span>{NumberOfIncorrectAnswer}</span>
              </li>
              <li>
                <span>정답 비율</span>
                <span>{(NumberOfCorrectAnswer / questions.length) * 100}%</span>
              </li>
            </ResultInfo>
            <ButtonWrap>
              <Button size={'small'} onClick={onClickReset}>
                처음으로
              </Button>
              <Button size={'small'} onClick={onClickNext}>
                기록보기
              </Button>
              <Button buttonType={'primary'} size={'small'} onClick={onClickNext}>
                다시 풀기
              </Button>
            </ButtonWrap>
          </Inner>
        </>
      )}
    </Container>
  );
}
