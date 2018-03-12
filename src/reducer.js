import { combineReducers } from 'redux';

import AppReducer from './components/reducer';

export default combineReducers({
  InputState: AppReducer,
});
