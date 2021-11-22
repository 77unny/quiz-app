import React, { ReactElement } from 'react';

import { DIFFICULTY } from '../../../../constants';
import Timer from '../../../atoms/timer';
import { ISaveData } from '../../../organisms/quiz/types';

export default function Item({ item }: { item: ISaveData }): ReactElement {
  const { setDate, difficulty, questions, NumberOfCorrectAnswer, time } = item;
  const splitSetDate = setDate.split(' ');
  const [year, month, date] = splitSetDate;

  const itemDate = [year.replace('.', ''), month.replace('.', ''), date.replace('.', '')].join('-');

  return (
    <div>
      <ul>
        <li>
          <span>날짜</span>
          <span>{itemDate}</span>
        </li>
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
          <span>정답 비율</span>
          <span>{(NumberOfCorrectAnswer / questions.length) * 100}%</span>
        </li>
      </ul>
    </div>
  );
}
