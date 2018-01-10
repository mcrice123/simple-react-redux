import INPUT_CHANGED from './constants';

export const initialState = {
	input: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case INPUT_CHANGED:
			return { ...state, input: action.input };

		default:
			return state;
	}
};
