// const getCourses = async () => {
// 	const response = await fetch('http://localhost:3001/courses/all', {
// 		method: 'GET',
// 	});
// 	const result = await response.json();
// };

export const getCourses = async () => {
	const response = await fetch('/courses.json');
	return response.json();
};
