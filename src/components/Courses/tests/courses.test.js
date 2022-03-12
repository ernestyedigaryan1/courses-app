import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Courses from '../Courses';
import { BrowserRouter as Router } from 'react-router-dom';


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
			duration: 1200
		},
		{
			id: '85aa7f7d-73c0-4e23-9a02-27902d418b37',
			title: 'ReactJS',
			authors: ['John Wick', 'Batman'],
			created: '09/03/2022',
			description: 'React is the best',
			duration: 1200
		}
	],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

afterEach(cleanup);

it('Check username is displayed on the page', () => {
	const screen = render(<Provider store={mockedStore}>
		<Router>
			<Courses />
		</Router>
	</Provider>);

	expect(screen.getAllByTestId('courseCard')).toHaveLength(2);
})

it('Check username is displayed on the page', () => {
	mockedState.courses = [];
	const screen = render(<Provider store={mockedStore}>
		<Router>
			<Courses />
		</Router>
	</Provider>);

	expect(screen.queryByText('Oops... There is no course with that name')).toBeInTheDocument();
})
