import { Link } from 'react-router-dom';
import { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';

import {
	selectAuthors,
	selectCourses,
} from '../../redux/src/selectors/selectors';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const courses = useSelector(selectCourses());
	const authors = useSelector(selectAuthors());

	const filteredCourses = courses.filter((item) => {
		return (
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.id.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	return (
		<div className='container-fluid card border-primary rounded-0'>
			<div className='row'>
				<SearchBar onSearch={(query) => setSearchQuery(query)} />
				<div className='col-3 mt-3'>
					<Link to='/courses/add'>
						<Button
							text='Add new course'
							color='btn btn-outline-primary rounded-0'
						/>
					</Link>
				</div>
			</div>
			<div>
				{filteredCourses.length === 0 ? (
					<h2>Oops... There is no course with that name</h2>
				) : (
					filteredCourses.map((course) => {
						return (
							<CourseCard
								key={course.id}
								id={course.id}
								title={course.title}
								authors={authors
									.filter((author) => course.authors.includes(author.id))
									.map((author) => author.name)}
								created={course.creationDate}
								description={course.description}
								duration={course.duration}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Courses;
