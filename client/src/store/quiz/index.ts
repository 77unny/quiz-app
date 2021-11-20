import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IQuizInitialState, TQuestion } from './types';

/**
 * @description Quiz 초기 값
 * */
const initialState: IQuizInitialState = {
  progress: false,
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
    setProgress: (state, action: PayloadAction<boolean>) => {
      state.progress = action.payload;
    },
    // 경과 시간 세팅
    setTime: (state, action: PayloadAction<{ key: 'elapsedTime'; value: number }>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    // 난이도 세팅
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
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

export const { setProgress, setTime, setDifficulty, setQuestions, setAnswer, reset } = quizSlice.actions;

export default quizSlice.reducer;
