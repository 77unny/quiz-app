import { combineReducers } from 'redux';

import quizSlice from './quiz';

const rootReducer = combineReducers({
  quizSlice,
});

export default rootReducer;
