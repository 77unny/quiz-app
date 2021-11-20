import { RootState } from '../types';
import { IQuizInitialState } from './types';

/**
 * @description 스토어에 저장된 Quiz 를 꺼낸다.
 * */
export const getQuizState = (state: RootState): IQuizInitialState => state.quizSlice;
