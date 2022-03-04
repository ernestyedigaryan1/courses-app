import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
	selectAuthors,
	selectCourse,
} from '../../redux/src/selectors/selectors';

const CourseInfo = () => {
	const { id } = useParams();

	const authors = useSelector(selectAuthors);
	const course = useSelector(selectCourse(id));

	return (
		<div className='container'>
			<Link to='/courses'>{'< '}Back to courses</Link>
			{course && authors ? (
				<>
					<h1 className='text-center'>{course.title}</h1>
					<div className='row mt-5'>
						<div className='col-6'>{course.description}</div>
						<div className='col-6'>
							<p>
								<b>ID:</b> {course.id}
							</p>
							<p>
								<b>Duration:</b> {course.duration}
							</p>
							<p>
								<b>Created:</b> {course.creationDate}
							</p>
							<p>
								<b>Authors: </b>
								{authors
									.filter((author) => course.authors.includes(author.id))
									.map((author) => author.name)
									.join(', ')}
							</p>
						</div>
					</div>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default CourseInfo;
