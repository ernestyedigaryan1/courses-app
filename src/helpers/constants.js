export const DEFAULT_USER = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const INITIAL_FORM = {
	id: '',
	title: '',
	description: '',
	creationDate: '',
	duration: '',
	authors: [],
};

export const ENDPOINTS = {
	ALL_COURSES: '/courses/all',
	ADD_COURSE: '/courses/add',
	ALL_AUTHORS: '/authors/all',
	ADD_AUTHOR: '/authors/add',
	AUTHORS: '/authors',
	COURSES: '/courses',
	CURRENT_USER: '/users/me',
	LOGOUT: '/logout',
	LOGIN: '/login',
};
