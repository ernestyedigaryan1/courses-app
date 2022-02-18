import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { postFetch } from '../../services/postFetch';
import { putUser } from '../../redux/src/store/user/actionCreators';

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();
	const dispatch = useDispatch();

	const userLogin = async (e) => {
		e.preventDefault();
		postFetch('/login', user).then((response) => {
			if (response.successful) {
				dispatch(
					putUser({
						isAuth: true,
						name: response.user.name,
						email: response.user.email,
						token: response.result,
					})
				);
				localStorage.setItem('token', response.result);
				localStorage.setItem('user', JSON.stringify(response.user));
				history.push('/courses');
			} else {
				alert(response.errors || response.result);
			}
		});
	};

	return (
		<div className='d-grid col-3 mx-auto'>
			<br />
			<h3 className='text-center'>Login</h3>
			<form onSubmit={(e) => userLogin(e)}>
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
