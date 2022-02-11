import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const user = {
		email,
		password,
	};

	const userLogin = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful) {
			localStorage.setItem('token', result.result);
			localStorage.setItem('user', JSON.stringify(result.user));
			history.push('/courses');
		} else {
			alert(result.errors || result.result);
		}
	};

	return (
		<div className='d-grid col-3 mx-auto'>
			<br />
			<h3 className='text-center'>Login</h3>
			<form onSubmit={(e) => userLogin(e)}>
				<Input
					query={email}
					onQueryChange={(myQuery) => setEmail(myQuery)}
					labelText='Email'
					placeholderText='Enter email...'
				/>
				<Input
					query={password}
					type='password'
					onQueryChange={(myQuery) => setPassword(myQuery)}
					labelText='Password'
					placeholderText='Enter password...'
				/>
				<div className='d-grid col-6 mx-auto'>
					<Button text='Login' color='btn btn-outline-success rounded-0' />
				</div>
			</form>
			<p className='text-center mt-2'>
				If you not have an account you can{' '}
				<Link to='/registration'>Registration</Link>
			</p>
		</div>
	);
};

export default Login;
