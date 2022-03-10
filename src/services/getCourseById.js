import { envs } from '../helpers/envs';
import { ENDPOINTS } from '../helpers/constants';

export const getCourseById = async (id) => {
	const response = await fetch(`${envs.local}${ENDPOINTS.COURSES}/${id}`);
	return response.json();
};
