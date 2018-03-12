import { INPUT_CHANGED, COUNT_CHANGED } from './constants.js';
console.log("reducer: ", INPUT_CHANGED);
export const initialState = {
	value: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			return { ...state, value: action.value };

		case COUNT_CHANGED: 
			return { ...state, count: action.count };

		default:
			return state;
	}
};
