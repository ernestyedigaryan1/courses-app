import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';

import Header from '../Header';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

afterEach(cleanup);

it('Check username is displayed on the page', () => {
	const screen = render(
		<Provider store={mockedStore}>
			<Header />
		</Provider>
	);
	expect(screen.queryByText('Test Name')).toBeInTheDocument();
});

it('Check logo is displayed on the page', () => {
	const screen = render(
		<Provider store={mockedStore}>
			<Header />
		</Provider>
	);
	expect(screen.getByTestId('logo')).toBeInTheDocument();
});
