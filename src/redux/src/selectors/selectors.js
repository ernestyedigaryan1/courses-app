export const selectCourse = (id) => {
	return (state) => state.courses.find((course) => course.id === id);
};

export const selectCourses = (state) => state.courses;

export const selectAuthors = (state) => state.authors;

export const filterAuthors = (authors, selectedAuthors) => {
	return authors.filter((author) => {
		return !JSON.stringify(selectedAuthors).includes(JSON.stringify(author.id));
	});
};
