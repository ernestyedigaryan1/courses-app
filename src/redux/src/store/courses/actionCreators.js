import * as actions from './actionTypes';

export const putCourses = (courses) => ({ type: actions.PUT_COURSES, courses });
export const removeCourse = (id) => ({ type: actions.REMOVE_COURSE, id });
export const createCourse = (course) => ({
	type: actions.CREATE_COURSE,
	course,
});
