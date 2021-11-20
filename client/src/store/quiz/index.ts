import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IQuizInitialState, TQuestion } from './types';

/**
 * @description Quiz 초기 값
 * */
const initialState: IQuizInitialState = {
  elapsedTime: 0, // 경과시간
  difficulty: 'random', // 난이도
  NumberOfCorrectAnswer: 0, // 정답 수
  NumberOfIncorrectAnswer: 0, // 오답 수
  questions: [], // API response 문항 리스트
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // 경과 시간 세팅
    setTime: (state, action: PayloadAction<{ key: 'elapsedTime'; value: number }>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    // API response 문항 리스트 세팅
    setQuestions: (state, action: PayloadAction<TQuestion[]>) => {
      state.questions = action.payload;
    },
    // 정답 오답 세팅
    setAnswer: (
      state,
      action: PayloadAction<{ key: 'NumberOfCorrectAnswer' | 'NumberOfIncorrectAnswer'; value: number }>,
    ) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    // 초기화
    reset: () => initialState,
  },
});

export const { setTime, reset } = quizSlice.actions;

export default quizSlice.reducer;
