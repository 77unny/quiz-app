import React, { ReactElement, useMemo } from 'react';

import * as utils from '../../../utils';
import RadioButton from '../../radioButton';
import { Container } from './style';
import { IAnswerProps } from './types';

const Answers = React.memo(function Answers({ questions, handleChange, selectedValue }: IAnswerProps): ReactElement {
  const answers = useMemo(() => utils.shuffle([questions.correct_answer, ...questions.incorrect_answers]), [questions]);

  return (
    <Container>
      <ul>
        {answers.map(item => (
          <li key={item}>
            <RadioButton label={item} value={item} isChecked={selectedValue === item} handleChange={handleChange} />
          </li>
        ))}
      </ul>
    </Container>
  );
});

export default Answers;
