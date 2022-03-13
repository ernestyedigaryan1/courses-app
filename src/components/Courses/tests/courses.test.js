import React from 'react';
import { cleanup, getByTestId, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Courses from '../Courses';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CourseForm from '../../CourseForm/CourseForm';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [
		{
			id: '85aa767d-73c0-4e23-9a02-27902d418b37',
			title: 'ReactJS',
			authors: ['John Wick', 'Batman'],
			created: '09/03/2022',
			description: 'React is the best',
			duration: 1200,
		},
		{
			id: '85aa7f7d-73c0-4e23-9a02-27902d418b37',
			title: 'ReactJS',
			authors: ['John Wick', 'Batman'],
			created: '09/03/2022',
			description: 'React is the best',
			duration: 1200,
		},
	],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

afterEach(cleanup);

it('Check 2 courses is displayed on the page', () => {
	const screen = render(
		<Provider store={mockedStore}>
			<Router>
				<Courses />
			</Router>
		</Provider>
	);

	expect(screen.getAllByTestId('courseCard')).toHaveLength(2);
});

it('Check courses is not displayed on the page', () => {
	mockedState.courses = [];
	const screen = render(
		<Provider store={mockedStore}>
			<Router>
				<Courses />
			</Router>
		</Provider>
	);

	expect(
		screen.queryByText('Oops... There is no course with that name')
	).toBeInTheDocument();
});

it('Check course form is displayed after clicking on add new course', () => {
	mockedState.user.role = 'admin';
	const screen = render(
		<Provider store={mockedStore}>
			<Router>
				<Route>
					<Courses />
				</Route>
				<Route>
					<CourseForm />
				</Route>
			</Router>
		</Provider>
	);

	const createCourse = screen.getByTestId('createCourse');
	createCourse.click();

	expect(screen.getByTestId('courseForm')).toBeInTheDocument();
});
