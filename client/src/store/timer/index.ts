import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITimeInitialState } from './types';

/**
 * @description Quiz 초기 값
 * */
const initialState: ITimeInitialState = {
  time: 0, // 경과시간
};

export const timeSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    // 경과 시간 세팅
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setTime, reset } = timeSlice.actions;

export default timeSlice.reducer;
