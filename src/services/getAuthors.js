export const getAuthors = async () => {
	const response = await fetch('/authors.json');
	return response.json();
};
