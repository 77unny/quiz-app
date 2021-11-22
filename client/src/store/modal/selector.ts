import { RootState } from '../types';
import { IModalInitialState } from './types';

/**
 * @description 스토어에 저장된 modal
 * */
export const getModalState = (state: RootState): IModalInitialState => state.modalSlice;
