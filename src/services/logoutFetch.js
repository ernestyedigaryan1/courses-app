import { envs } from '../helpers/envs';
import { ENDPOINTS } from '../helpers/constants';

export const logoutFetch = async (token) => {
	return fetch(`${envs.local}${ENDPOINTS.LOGOUT}`, {
		method: 'DELETE',
		headers: {
			Authorization: token,
		},
	});
};
