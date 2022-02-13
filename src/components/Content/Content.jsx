import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Courses from '../Courses/Courses';
import CourseInfo from '../CourseInfo/CourseInfo';
import CreateCourse from '../CreateCourse/CreateCourse';
import { getAuthors } from '../../services/getAuthors';
import { getCourses } from '../../services/getCourses';

const Content = () => {
	const [courses, setCourses] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		getAuthors().then((response) => setAuthors(response));
	}, []);

	useEffect(() => {
		getCourses().then((response) => setCourses(response));
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/courses'>
					<Courses courses={courses} authors={authors} />
				</Route>
				<Route path='/courses/add'>
					<CreateCourse
						onSendCourse={(course) => setCourses([...courses, course])}
						authors={authors}
						onAddAuthor={(newAuthor) => setAuthors([...authors, newAuthor])}
					/>
				</Route>
				<Route exact path='/courses/:id'>
					<CourseInfo authors={authors} />
				</Route>
				<Route path='/'>
					<Courses courses={courses} authors={authors} />
				</Route>
			</Switch>
		</>
	);
};

export default Content;
