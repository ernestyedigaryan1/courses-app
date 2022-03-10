import {
	createCourse,
	updateCourse,
} from '../redux/src/store/courses/actionCreators';
import { postFetch } from './postFetch';
import { ENDPOINTS } from '../helpers/constants';
import { createAuthor } from '../redux/src/store/authors/actionCreators';
import { putFetch } from './putFetch';

export const publishCourse = (body, token, onPublish) => {
	return (dispatch) => {
		return postFetch(ENDPOINTS.ADD_COURSE, body, token).then((response) => {
			dispatch(createCourse(response.result));
			onPublish();
		});
	};
};

export const modifyCourse = (body, id, token, onPublish) => {
	return (dispatch) => {
		return putFetch(ENDPOINTS.COURSES, id, body, token).then((response) => {
			dispatch(updateCourse(id, response.result));
			onPublish();
		});
	};
};

export const publishAuthor = (body, token) => {
	return (dispatch) => {
		return postFetch(ENDPOINTS.ADD_AUTHOR, body, token).then((response) => {
			dispatch(createAuthor(response.result));
		});
	};
};
