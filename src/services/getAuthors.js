import { envs } from '../helpers/envs';
import { ENDPOINTS } from '../helpers/constants';

export const getAuthors = async () => {
	const response = await fetch(`${envs.local}${ENDPOINTS.ALL_AUTHORS}`);
	return response.json();
};
