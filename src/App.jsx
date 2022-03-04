import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Auth from './components/Auth/Auth';
import { loadUser } from './services/loadData';

import './App.css';

function App() {
	const [token, setToken] = useState('');
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.token) {
			dispatch(loadUser(localStorage.token));
		}
		setToken(localStorage.token);
	}, [location, dispatch]);

	return (
		<>
			<Header />
			{token ? <Content /> : <Auth />}
		</>
	);
}

export default App;
