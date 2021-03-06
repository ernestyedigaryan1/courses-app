import { envs } from '../helpers/envs';

export const postFetch = async (endpoint, body, token) => {
	const response = await fetch(`${envs.local}${endpoint}`, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			Authorization: token || '',
		},
	});
	return response.json();
};
