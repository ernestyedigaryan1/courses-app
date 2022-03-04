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
		default:
			return state;
	}
};
