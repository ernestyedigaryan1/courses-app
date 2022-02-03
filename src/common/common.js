export const getRandomString = (length) => {
	const randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < length; i++) {
		result += randomChars.charAt(
			Math.floor(Math.random() * randomChars.length)
		);
	}
	return result;
};

export const validateInput = (state, setState) => {
	if (state.length === 0) {
		setState('');
		return alert("Input field can't be empty.");
	}
	if (state.length < 2) {
		setState('');
		return alert('Input field must be no less than 2 letters.');
	}
};

export const generateID = () => {
	return `${getRandomString(8)}-${getRandomString(4)}-${getRandomString(
		4
	)}-${getRandomString(4)}-${getRandomString(12)}`;
};
