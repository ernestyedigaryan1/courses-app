import humanizeDuration from 'humanize-duration';
import { Link } from 'react-router-dom';

import Button from '../../../../common/Button/Button';

const CourseCard = ({ id, title, description, authors, duration, created }) => {
	const formattedDuration = humanizeDuration(duration * 60000);

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
					<div className='col-md-4 offset-md-2'>
						<Link to={`courses/${id}`}>
							<Button text='Show course' color='btn btn-outline-success' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
