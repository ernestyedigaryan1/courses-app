import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

const Courses = ({
	courses,
	query,
	onQueryChange,
	onClick,
	onToggle,
	authors,
}) => (
	<div className='container-fluid card border-primary rounded-0'>
		<div className='row'>
			<SearchBar
				query={query}
				onChange={(myQuery) => onQueryChange(myQuery)}
				onClick={() => onClick()}
			/>
			<div className='col-3 mt-3'>
				<Button
					onClick={() => onToggle()}
					text='Add new course'
					color='btn btn-outline-primary rounded-0'
				/>
			</div>
		</div>
		<div>
			{courses.length === 0 ? (
				<h2>Oops... There is no course with that name</h2>
			) : (
				courses.map((course) => {
					return (
						<CourseCard
							key={course.id}
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

export default Courses;
