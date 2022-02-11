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

export const generateID = () => {
	return `${getRandomString(8)}-${getRandomString(4)}-${getRandomString(
		4
	)}-${getRandomString(4)}-${getRandomString(12)}`;
};
