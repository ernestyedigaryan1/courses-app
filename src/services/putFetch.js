import { envs } from '../helpers/envs';

export const putFetch = async (endpoint, id, body, token) => {
	const response = await fetch(`${envs.local}${endpoint}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: token || '',
		},
	});
	return response.json();
};
