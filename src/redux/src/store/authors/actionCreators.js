import * as actions from './actionTypes';

export const putAuthors = (authors) => ({ type: actions.PUT_AUTHORS, authors });
export const removeAuthor = (id) => ({ type: actions.REMOVE_AUTHOR, id });
export const createAuthor = (author) => ({
	type: actions.CREATE_AUTHOR,
	author,
});
