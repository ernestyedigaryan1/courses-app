import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const newUser = {
		name,
		password,
		email,
	};

	const userRegister = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3001/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful) {
			history.push('/login');
		} else {
			alert(result.errors);
		}
	};

	return (
		<div className='d-grid col-3 mx-auto'>
			<br />
			<h3 className='text-center'>Registration</h3>
			<form onSubmit={(e) => userRegister(e)}>
				<Input
					query={name}
					onQueryChange={(myQuery) => setName(myQuery)}
					labelText='Name'
					placeholderText='Enter name...'
				/>
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
