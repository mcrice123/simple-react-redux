import { combineReducers } from 'redux';

import AppReducer from './components/reducer';

export default () => {
  return combineReducers({
  	InputState: AppReducer,
  });
};