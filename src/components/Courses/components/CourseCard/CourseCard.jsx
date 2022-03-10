import humanizeDuration from 'humanize-duration';
import { Link } from 'react-router-dom';
import { BiTrashAlt, BiEditAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';
import { selectCurrentUser } from '../../../../redux/src/selectors/selectors';
import { deleteCourse } from '../../../../services/deleteCourse';

const CourseCard = ({ id, title, description, authors, duration, created }) => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const formattedDuration = humanizeDuration(duration * 60000);

	const onDeleteCourse = () => {
		dispatch(deleteCourse(id));
	};

	return (
		<div className='card border-success mt-3 mb-3 rounded-0'>
			<div className='row m-3'>
				<div className='col-8'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<div className='col-4'>
					<p>
						<b>Authors: </b>
						{authors.join(', ')}
					</p>
					<p>
						<b>Duration:</b> {formattedDuration}
					</p>
					<p>
						<b>Created:</b> {created}
					</p>
					<div className='row'>
						<div className='col-6 offset-1'>
							<Link to={`courses/${id}`}>
								<Button text='Show course' color='btn btn-outline-success' />
							</Link>
						</div>
						{currentUser.role === 'admin' ? (
							<>
								<div className='col-2'>
									<Button
										text={<BiTrashAlt />}
										color='btn btn-outline-danger'
										onClick={() => onDeleteCourse()}
									/>
								</div>
								<div className='col-2'>
									<Link to={`courses/update/${id}`}>
										<Button
											text={<BiEditAlt />}
											color='btn btn-outline-primary'
										/>
									</Link>
								</div>
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
