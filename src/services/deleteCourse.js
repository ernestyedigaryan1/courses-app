import { deleteFetch } from './deleteFetch';
import { ENDPOINTS } from '../helpers/constants';
import { removeCourse } from '../redux/src/store/courses/actionCreators';

export const deleteCourse = (id) => {
	return (dispatch) => {
		return deleteFetch(ENDPOINTS.COURSES, id, localStorage.token).then(() => {
			dispatch(removeCourse(id));
		});
	};
};
