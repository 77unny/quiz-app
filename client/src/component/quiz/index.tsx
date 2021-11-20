import DOMPurify from 'dompurify';
import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

import { DIFFICULTY } from '../../constants';
import { getQuizState } from '../../store/quiz/selectors';
import { TQuestion } from '../../store/quiz/types';
import * as utils from '../../utils';
import Button from '../button';
import RadioButton from '../radioButton';
import { AnswerContainer, Container, Inner, Subject, Title } from './style';

function Answers({ questions }: { questions: TQuestion }): ReactElement {
  const answers = utils.shuffle([questions.correct_answer, ...questions.incorrect_answers]);
  console.log(questions.correct_answer);
  return (
    <AnswerContainer>
      <ul>
        {answers.map(item => (
          <li key={item}>
            <RadioButton label={item} value={item} isChecked={false} handleChange={e => console.log(e)} />
          </li>
        ))}
      </ul>
    </AnswerContainer>
  );
}

export default function Quiz(): ReactElement {
  const { questions } = useSelector(getQuizState);

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(false);

  console.log(questions);
  return (
    <Container>
      <Title>
        <span>
          <span>STEP{step + 1}.</span> QUIZ
        </span>
        <span>[{DIFFICULTY[questions[step].difficulty].label}]</span>
      </Title>
      <Inner>
        <Subject dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(questions[step].question) }} />
        <Answers questions={questions[step]} />
        <Button buttonType={'primary'} disabled>
          다음 문제
        </Button>
      </Inner>
    </Container>
  );
}
