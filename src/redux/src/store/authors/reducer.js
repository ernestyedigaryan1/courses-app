export const authorsReducer = (state, action) => {
	switch (action.type) {
		case 'putAuthors':
			const { authors } = action;
			return authors;
		case 'removeAuthor':
			const { id } = action;
			return state.filter((author) => author.id !== id);
		case 'createAuthor':
			const { author } = action;
			return [...state, author];
		default:
			return state;
	}
};
