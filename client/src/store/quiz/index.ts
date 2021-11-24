import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IQuizInitialState, TQuestion } from './types';

/**
 * @description Quiz 초기 값
 * */
const initialState: IQuizInitialState = {
  isPlaying: false,
  difficulty: 'random', // 난이도
  NumberOfCorrectAnswer: 0, // 정답 수
  NumberOfIncorrectAnswer: 0, // 오답 수
  step: 0, // 퀴즈 스텝
  questions: [], // API response 문항 리스트
  answers: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setStep: state => {
      state.step = state.step + 1;
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
    setAnswer: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.NumberOfCorrectAnswer = state.NumberOfCorrectAnswer + 1;
      } else {
        state.NumberOfIncorrectAnswer = state.NumberOfIncorrectAnswer + 1;
      }
      state.answers.push(action.payload);
    },
    setRestart: state => {
      state.step = initialState.step;
      state.answers = initialState.answers;
      state.NumberOfCorrectAnswer = initialState.NumberOfCorrectAnswer;
      state.NumberOfIncorrectAnswer = initialState.NumberOfIncorrectAnswer;
    },
    // 초기화
    reset: () => initialState,
  },
});

export const { setIsPlaying, setStep, setDifficulty, setQuestions, setAnswer, setRestart, reset } = quizSlice.actions;

export default quizSlice.reducer;
