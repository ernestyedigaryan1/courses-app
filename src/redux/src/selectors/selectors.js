export const selectCourse = (id) => {
	return (state) => state.courses.find((course) => course.id === id);
};

export const selectCourses = (state) => state.courses;

export const selectAuthors = (state) => state.authors;

export const filterAuthors = (authors, selectedAuthors) => {
	return authors.filter((author) => {
		return !selectedAuthors.some((item) => {
			return typeof item === 'object'
				? item.id === author.id
				: item === author.id;
		});
	});
};

export const filterExistedAuthors = (authors, courseAuthors) => {
	return authors.filter((author) => !courseAuthors.includes(author.id));
};

export const selectCurrentUser = (state) => state.user;
