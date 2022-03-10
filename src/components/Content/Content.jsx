import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Courses from '../Courses/Courses';
import CourseInfo from '../CourseInfo/CourseInfo';
import CreateCourse from '../CreateCourse/CreateCourse';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import { loadAuthors, loadCourses } from '../../services/loadData';
import UpdateCourse from '../UpdateCourse/UpdateCourse';

const Content = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadCourses());
		dispatch(loadAuthors());
	}, [dispatch]);

	return (
		<Switch>
			<Route exact path='/courses'>
				<Courses />
			</Route>
			<PrivateRouter path='/courses/add'>
				<CreateCourse />
			</PrivateRouter>
			<Route exact path='/courses/:id'>
				<CourseInfo />
			</Route>
			<PrivateRouter exact path='/courses/update/:courseId'>
				<UpdateCourse />
			</PrivateRouter>
			<Route path='/'>
				<Courses />
			</Route>
		</Switch>
	);
};

export default Content;
