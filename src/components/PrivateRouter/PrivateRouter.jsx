import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRouter = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);

	return (
		<Route
			{...rest}
			component={(props) =>
				user.isAuth ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};

export default PrivateRouter;
