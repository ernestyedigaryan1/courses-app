export const selectCourse = (id) => {
	return (state) => state.courses.find((course) => course.id === id);
};

export const selectCourses = () => {
	return (state) => state.courses;
};

export const selectAuthors = () => {
	return (state) => state.authors;
};
