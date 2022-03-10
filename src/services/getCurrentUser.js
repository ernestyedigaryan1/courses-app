import { envs } from '../helpers/envs';
import { ENDPOINTS } from '../helpers/constants';

export const getCurrentUser = async (token) => {
	const response = await fetch(`${envs.local}${ENDPOINTS.CURRENT_USER}`, {
		method: 'GET',
		headers: {
			Authorization: token,
		},
	});
	return response.json();
};
