import { Route, Switch } from 'react-router-dom';

import Registration from '../Registration/Registration';
import Login from '../Login/Login';

const Auth = () => {
	return (
		<>
			<Switch>
				<Route path='/registration'>
					<Registration />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<Login />
				</Route>
			</Switch>
		</>
	);
};

export default Auth;
