import { useHistory } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	const history = useHistory();
	const userLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		history.push('/login');
	};

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container-fluid'>
				<Logo alt='Course Image' />
				<div className='d-flex'>
					{localStorage.token && (
						<>
							<p className='m-2'>{JSON.parse(localStorage.user).name}</p>
							<Button
								onClick={() => userLogout()}
								text='Log out'
								color='btn btn-outline-info'
							/>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Header;
