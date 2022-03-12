import logo from './course-logo.png';

import './Logo.css';

const Logo = ({ alt }) => (
	<img src={logo} data-testid='logo' className='logo' alt={alt} />
);

export default Logo;
