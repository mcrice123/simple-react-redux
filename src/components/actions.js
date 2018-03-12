import { INPUT_CHANGED } from './constants.js';
console.log(INPUT_CHANGED);
export const inputChanged = (value) => {
	console.log("value inside action, ", value);
	return {
		type: INPUT_CHANGED,
		value,
	};
};

