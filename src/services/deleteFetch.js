import { envs } from '../helpers/envs';

export const deleteFetch = async (endpoint, id, token) => {
	const response = await fetch(`${envs.local}${endpoint}/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: token,
		},
	});
	return response.json();
};
