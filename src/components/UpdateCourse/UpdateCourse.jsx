import CourseForm from '../CourseForm/CourseForm';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../../services/getCourseById';

const UpdateCourse = () => {
	const { courseId } = useParams();
	const [course, setCourse] = useState();

	useEffect(() => {
		getCourseById(courseId).then((response) => {
			setCourse(response.result);
		});
	}, [courseId]);

	return (
		<div className='container-fluid card border-primary rounded-0'>
			{!course ? <h2>Loading...</h2> : <CourseForm id={courseId} />}
		</div>
	);
};

export default UpdateCourse;
