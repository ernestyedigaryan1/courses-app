export const coursesReducer = (state, action) => {
	switch (action.type) {
		case 'putCourses':
			const { courses } = action;
			return courses;
		case 'removeCourse':
			const { id } = action;
			return state.filter((course) => course.id !== id);
		case 'createCourse':
			const { course } = action;
			return [...state, course];
		case 'updateCourse':
			const { courseId, courseInfo } = action;
			const foundIndex = state.findIndex((course) => course.id === courseId);
			state[foundIndex] = courseInfo;
			return state;
		default:
			return state;
	}
};
