import React from 'react';

import { coursesReducer } from '../courses/reducer';
import * as actions from '../courses/actionTypes';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};


it('should return the initial state', () => {
	expect(coursesReducer(mockedState, {})).toEqual(mockedState);
})

it('should return the updated state after adding a course', () => {
	const course = {
		title: 'React',
		description: 'React Is the best',
		duration: 123,
		authors: ['author1', 'author2']
	};

	expect(coursesReducer(mockedState.courses, {
		type: actions.CREATE_COURSE,
		course,
	})).toEqual([...mockedState.courses, course]);
})

it('should return the courses', () => {
	const courses = [
		{
			title: 'React',
			description: 'React Is the best',
			duration: 123,
			authors: ['author1', 'author2']
		},
		{
			title: 'Angular',
			description: 'Angular',
			duration: 1234,
			authors: ['author1', 'author2']
		},
	];

	expect(coursesReducer(mockedState.courses, {
		type: actions.PUT_COURSES,
		courses,
	})).toEqual(courses);
})
