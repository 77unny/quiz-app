import DOMPurify from 'dompurify';
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY, QUIZ_MESSAGE } from '../../../constants';
import { setAnswer, setStep } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import Button from '../../atoms/button';
import InfoMessage from '../../atoms/infoMessage';
import Timer from '../../atoms/timer';
import { Inner, Subject, Title } from '../../organisms/quiz/style';
import Answers from '../answer';

export default function Board(): ReactElement {
  const dispatch = useDispatch();

  const { questions, step } = useSelector(getQuizState);

  const [selected, setSelected] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectAnswer = (value: string) => {
    setSelectedAnswer(value);
    setSelected(false);
  };

  // 다음 문제 - 초기화 처리 | 정답 결과 리덕스에 저장
  const onClickNext = () => {
    setSelected(true);
    setSelectedAnswer('');
    dispatch(setStep());
    dispatch(setAnswer(questions[step].correct_answer === selectedAnswer));
  };

  return (
    <>
      <Timer prefix={'[진행 시간]'} />
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
  );
}
