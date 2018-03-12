import { INPUT_CHANGED } from './constants';

export const initialState = {
	value: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			console.log("input changed");
			return { ...state, value: action.value };

		default:
			return state;
	}
};
