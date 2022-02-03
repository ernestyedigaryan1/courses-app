import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

import './App.css';

function App() {
	let [courses, setCourses] = useState([]);
	let [authors, setAuthors] = useState([]);
	let [query, setQuery] = useState('');
	let [searchQuery, setSearchQuery] = useState('');
	let [toggle, setToggle] = useState(true);

	let filteredCourses = courses.filter((item) => {
		return (
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.id.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	useEffect(() => {
		fetch('./authors.json')
			.then((response) => response.json())
			.then((data) => {
				setAuthors(data);
			});
	}, []);

	useEffect(() => {
		fetch('./courses.json')
			.then((response) => response.json())
			.then((data) => {
				setCourses(data);
			});
	}, []);

	return (
		<>
			<Header />
			{toggle ? (
				<Courses
					onToggle={() => setToggle(!toggle)}
					courses={filteredCourses}
					query={query}
					onQueryChange={(myQuery) => setQuery(myQuery)}
					onClick={() => setSearchQuery(query)}
					authors={authors}
				/>
			) : (
				<CreateCourse
					onSendCourse={(course) => setCourses([...courses, course])}
					onToggle={() => setToggle(!toggle)}
					authors={authors}
					onAddAuthor={(newAuthor) => setAuthors([...authors, newAuthor])}
				/>
			)}
		</>
	);
}

export default App;
