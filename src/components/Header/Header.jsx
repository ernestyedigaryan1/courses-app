import Logo from './../Logo/Logo';
import Button from './../Button/Button';

const Header = () => (
	<nav className='navbar navbar-light bg-light'>
		<div className='container-fluid'>
			<Logo alt='Course Image' />
			<div className='d-flex'>
				<p className='m-2'>Ernest</p>
				<Button text='Log out' color='btn btn-outline-info' />
			</div>
		</div>
	</nav>
);

export default Header;
