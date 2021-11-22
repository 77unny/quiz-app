import { combineReducers } from 'redux';

import modalSlice from './modal';
import quizSlice from './quiz';

const rootReducer = combineReducers({
  quizSlice,
  modalSlice,
});

export default rootReducer;
