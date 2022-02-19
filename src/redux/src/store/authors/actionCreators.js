import * as actions from './actionTypes';
import { generateID } from '../../../../helpers/helpers';

export const putAuthors = (authors) => ({ type: actions.PUT_AUTHORS, authors });
export const createAuthor = (authorName) => ({
	type: actions.CREATE_AUTHOR,
	author: { id: generateID(), name: authorName },
});
