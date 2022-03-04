import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { putUser } from '../../redux/src/store/user/actionCreators';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { DEFAULT_USER } from '../../helpers/constants';
import { logoutFetch } from '../../services/logoutFetch';
import { selectCurrentUser } from '../../redux/src/selectors/selectors';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector(selectCurrentUser);
	const userLogout = () => {
		logoutFetch(user.token).then((response) => {
			if (response.status === 200) {
				dispatch(putUser(DEFAULT_USER));
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				history.push('/login');
			} else {
				alert(response.errors || response.result);
			}
		});
	};

	return (
		<nav className='navbar navbar-light bg-light'>
			<div className='container-fluid'>
				<Logo alt='Course Image' />
				<div className='d-flex'>
					{user.isAuth && (
						<>
							<p className='m-2'>{user.name}</p>
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
