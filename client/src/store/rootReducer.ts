import { combineReducers } from 'redux';

import modalSlice from './modal';
import quizSlice from './quiz';
import timeSlice from './timer';

const rootReducer = combineReducers({
  quizSlice,
  modalSlice,
  timeSlice,
});

export default rootReducer;
