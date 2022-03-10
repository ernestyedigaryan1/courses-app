import { envs } from '../helpers/envs';
import { ENDPOINTS } from '../helpers/constants';

export const getCourses = async () => {
	const response = await fetch(`${envs.local}${ENDPOINTS.ALL_COURSES}`);
	return response.json();
};
