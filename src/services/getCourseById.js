export const getCourseById = async (id) => {
	const response = await fetch('/courses.json');
	const courses = await response.json();
	return courses.find((course) => course.id === id);
};
