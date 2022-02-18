import { envs } from '../helpers/envs';

export const getCourseById = async (id) => {
	const response = await fetch(`${envs.local}/courses/all`);
	const courses = await response.json();
	return courses.result.find((course) => course.id === id);
};
