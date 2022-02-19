export const authorsReducer = (state, action) => {
	switch (action.type) {
		case 'putAuthors':
			const { authors } = action;
			return authors;
		case 'createAuthor':
			const { author } = action;
			return [...state, author];
		default:
			return state;
	}
};
