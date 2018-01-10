import INPUT_CHANGED from './constants';

export const inputChanged = (value) => {
	console.log("meow");
	console.log("value, ", value);
	return {
		type: INPUT_CHANGED,
		value,
	};
};

