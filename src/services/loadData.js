import { putAuthors } from '../redux/src/store/authors/actionCreators';
import { getAuthors } from './getAuthors';
import { putCourses } from '../redux/src/store/courses/actionCreators';
import { getCourses } from './getCourses';
import { getCurrentUser } from './getCurrentUser';
import { putUser } from '../redux/src/store/user/actionCreators';

export const loadAuthors = () => {
	return (dispatch) => {
		return getAuthors().then((response) => {
			dispatch(putAuthors(response.result));
		});
	};
};

export const loadCourses = () => {
	return (dispatch) => {
		return getCourses().then((response) => {
			dispatch(putCourses(response.result));
		});
	};
};

export const loadUser = (token) => {
	return (dispatch) => {
		return getCurrentUser(token).then((response) => {
			const userInfo = {
				isAuth: response.successful,
				name: response.result.name,
				email: response.result.email,
				token: localStorage.getItem('token'),
				role: response.result.role,
			};
			dispatch(putUser(userInfo));
		});
	};
};
