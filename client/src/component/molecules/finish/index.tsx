import React, { ReactElement, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DIFFICULTY } from '../../../constants';
import { setIsOpen } from '../../../store/modal';
import { reset, setIsPlaying, setRestart } from '../../../store/quiz';
import { getQuizState } from '../../../store/quiz/selectors';
import { getTimeState } from '../../../store/timer/selector';
import { saveToLocalstorage, timeCalculator } from '../../../utils';
import Button from '../../atoms/button';
import { ButtonWrap, Inner, ResultInfo, Subject } from '../../organisms/quiz/style';

export default function Finish(): ReactElement {
  const dispatch = useDispatch();
  const { time } = useSelector(getTimeState);
  const { questions, difficulty, NumberOfCorrectAnswer, NumberOfIncorrectAnswer } = useSelector(getQuizState);
  const { min, sec } = timeCalculator(time);
  const timeRef = useRef(time);

  // 처음으로 - 초기화 처리
  const onClickHome = () => {
    dispatch(setIsPlaying(false));
    dispatch(reset());
  };

  // 다시 풀기 - step,time,store 초기화
  const onClickRestart = () => {
    dispatch(setRestart());
  };

  // 기록 모달 팝업 열기
  const onClickModal = () => {
    dispatch(setIsOpen(true));
  };

  useEffect(() => {
    // 경과 기록이 저장된 값이랑 다른경우 storage 에 저장한다.
    if (timeRef.current !== time) {
      const setDate = new Date().toLocaleString();
      const saveData = [{ setDate, questions, difficulty, NumberOfCorrectAnswer, NumberOfIncorrectAnswer, time }];
      saveToLocalstorage('quiz', saveData);
    }
    return () => {
      timeRef.current = time;
    };
  }, [time]);

  return (
    <Inner ended={true}>
      <Subject children={'모든 퀴즈 종료! 수고하셨습니다 🥳'} />
      <ResultInfo>
        <li>
          <span>난이도</span>
          <span>{DIFFICULTY[difficulty].label}</span>
        </li>
        <li>
          <span>소요 시간</span>
          <span>{`${min}:${sec}`}</span>
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
          <span>{((NumberOfCorrectAnswer / questions.length) * 100).toFixed(2)}%</span>
        </li>
      </ResultInfo>
      <ButtonWrap>
        <Button size={'small'} onClick={onClickHome} children={'처음으로'} />
        <Button size={'small'} onClick={onClickModal} children={'기록보기'} />
        <Button buttonType={'primary'} size={'small'} onClick={onClickRestart} children={'다시 풀기'} />
      </ButtonWrap>
    </Inner>
  );
}
