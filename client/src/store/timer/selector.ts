import { RootState } from '../types';

export const getTimeState = (state: RootState): { time: number } => state.timeSlice;
