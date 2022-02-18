import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { postFetch } from '../../services/postFetch';

const Registration = () => {
	const [user, setUser] = useState({
		name: '',
		password: '',
		email: '',
	});
	const history = useHistory();

	const userRegister = async (e) => {
		e.preventDefault();
		postFetch('/login', user).then((response) => {
			if (response.successful) {
				history.push('/login');
			} else {
				alert(response.errors || response.result);
			}
		});
	};

	return (
		<div className='d-grid col-3 mx-auto'>
			<br />
			<h3 className='text-center'>Registration</h3>
			<form onSubmit={(e) => userRegister(e)}>
				<Input
					query={user.name}
					onQueryChange={(myQuery) => setUser({ ...user, name: myQuery })}
					labelText='Name'
					placeholderText='Enter name...'
				/>
				<Input
					query={user.email}
					onQueryChange={(myQuery) => setUser({ ...user, email: myQuery })}
					labelText='Email'
					placeholderText='Enter email...'
				/>
				<Input
					query={user.password}
					type='password'
					onQueryChange={(myQuery) => setUser({ ...user, password: myQuery })}
					labelText='Password'
					placeholderText='Enter password...'
				/>
				<div className='d-grid col-6 mx-auto'>
					<Button text='Register' color='btn btn-outline-success rounded-0' />
				</div>
			</form>
			<p className='text-center mt-2'>
				If you have an account you can <Link to='/login'>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
