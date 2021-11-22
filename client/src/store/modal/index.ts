import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IModalInitialState } from './types';

/**
 * @description modal 상태관리
 * */
const initialState: IModalInitialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    // 초기화
    reset: () => initialState,
  },
});

export const { setIsOpen, reset } = modalSlice.actions;

export default modalSlice.reducer;
