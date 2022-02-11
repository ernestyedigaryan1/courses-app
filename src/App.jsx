import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Auth from './components/Auth/Auth';

import './App.css';

function App() {
	const [token, setToken] = useState('');
	const history = useHistory();

	useEffect(() => setToken(localStorage.token));
	useEffect(() => history.listen(() => setToken(localStorage.token)));

	return (
		<>
			<Header />
			{token ? <Content /> : <Auth />}
		</>
	);
}

export default App;
