import { envs } from '../helpers/envs';

export const getAuthors = async () => {
	const response = await fetch(`${envs.local}/authors/all`);
	return response.json();
};
