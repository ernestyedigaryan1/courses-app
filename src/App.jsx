import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Auth from './components/Auth/Auth';

import './App.css';

function App() {
	const [token, setToken] = useState('');
	const location = useLocation();

	useEffect(() => setToken(localStorage.token), [location]);

	return (
		<>
			<Header />
			{token ? <Content /> : <Auth />}
		</>
	);
}

export default App;
