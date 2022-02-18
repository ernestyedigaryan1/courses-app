import { envs } from '../helpers/envs';

export const getCourses = async () => {
	const response = await fetch(`${envs.local}/courses/all`);
	return response.json();
};
