import { INPUT_CHANGED } from './constants.js';
console.log("reducer: ", INPUT_CHANGED);
export const initialState = {
	value: '',
};

export default (state = initialState, action) => {
	console.log("action: ", action);
	switch (action.type) {
		case INPUT_CHANGED:
			console.log("input changed");
			console.log("action.value: ", action.value);
			return { ...state, value: action.value };

		default:
			return state;
	}
};
