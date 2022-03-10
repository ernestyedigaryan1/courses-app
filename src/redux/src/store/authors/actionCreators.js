import * as actions from './actionTypes';

export const putAuthors = (authors) => ({ type: actions.PUT_AUTHORS, authors });
export const createAuthor = (authorName) => ({
	type: actions.CREATE_AUTHOR,
	author: authorName,
});
