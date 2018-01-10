import INPUT_CHANGED from './constants';

export const inputChanged = (input) => {
	return {
		type: INPUT_CHANGED,
		input,
	};
};

