import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Courses from '../Courses/Courses';
import CourseInfo from '../CourseInfo/CourseInfo';
import CreateCourse from '../CreateCourse/CreateCourse';
import { getAuthors } from '../../services/getAuthors';
import { getCourses } from '../../services/getCourses';
import { putCourses } from '../../redux/src/store/courses/actionCreators';
import { putAuthors } from '../../redux/src/store/authors/actionCreators';

const Content = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getAuthors().then((response) => dispatch(putAuthors(response.result)));
		getCourses().then((response) => dispatch(putCourses(response.result)));
	}, [dispatch]);

	return (
		<Switch>
			<Route exact path='/courses'>
				<Courses />
			</Route>
			<Route path='/courses/add'>
				<CreateCourse />
			</Route>
			<Route exact path='/courses/:id'>
				<CourseInfo />
			</Route>
			<Route path='/'>
				<Courses />
			</Route>
		</Switch>
	);
};

export default Content;
