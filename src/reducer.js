import { combineReducers } from 'redux';

import AppReducer from './components/reducer';

export default () => {
	console.log("in main reducer");
  return combineReducers({
  	InputState: AppReducer,
  });
};