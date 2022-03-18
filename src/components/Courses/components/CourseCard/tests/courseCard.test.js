import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import humanizeDuration from 'humanize-duration';

import CourseCard from '../CourseCard';

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
	],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

it('Check course info is displayed on the page in the correct format', () => {
	const screen = render(
		<Provider store={mockedStore}>
			<Router>
				<CourseCard
					key={mockedState.courses[0].key}
					id={mockedState.courses[0].id}
					title={mockedState.courses[0].title}
					authors={mockedState.courses[0].authors}
					created={mockedState.courses[0].created}
					description={mockedState.courses[0].description}
					duration={mockedState.courses[0].duration}
				/>
			</Router>
		</Provider>
	);

	const formattedDuration = humanizeDuration(
		mockedState.courses[0].duration * 60000
	);

	expect(screen.queryByText('ReactJS')).toBeInTheDocument();
	expect(screen.queryByText('React is the best')).toBeInTheDocument();
	expect(screen.queryByText('09/03/2022')).toBeInTheDocument();
	expect(screen.getByTestId('courseAuthors')).toHaveTextContent(
		mockedState.courses[0].authors.join(', ')
	);
	expect(screen.getByTestId('courseDuration')).toHaveTextContent(
		`Duration: ${formattedDuration}`
	);
});
