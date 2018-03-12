import { INPUT_CHANGED, COUNT_CHANGED } from './constants.js';

export const inputChanged = (value) => {
	return {
		type: INPUT_CHANGED,
		value,
	};
};

export const countChanged = (count) => {
	return {
		type: COUNT_CHANGED,
		count,
	};
};

