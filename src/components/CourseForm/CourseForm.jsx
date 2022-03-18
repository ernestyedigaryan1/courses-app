import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import humanizeDuration from 'humanize-duration';
import { useHistory } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import {
	filterAuthors,
	selectAuthors,
	selectCurrentUser,
} from '../../redux/src/selectors/selectors';
import {
	modifyCourse,
	publishAuthor,
	publishCourse,
} from '../../services/publishData';
import { loadAuthors } from '../../services/loadData';
import { INITIAL_FORM } from '../../helpers/constants';
import { getCourseById } from '../../services/getCourseById';

const CourseForm = ({ id }) => {
	const dispatch = useDispatch();
	const [courseForm, setCourseForm] = useState(INITIAL_FORM);
	const [authorQuery, setAuthorQuery] = useState('');
	const user = useSelector(selectCurrentUser);
	const authors = useSelector(selectAuthors);
	const history = useHistory();

	useEffect(() => {
		dispatch(loadAuthors());
	}, [dispatch]);

	useEffect(() => {
		if (id) {
			getCourseById(id).then((response) => {
				setCourseForm(response.result);
			});
		}
	}, [dispatch, id]);

	const formattedDuration = humanizeDuration(courseForm.duration * 60000);

	const filteredAuthors = filterAuthors(authors, courseForm.authors);

	const addAuthor = () => {
		if (authorQuery.length < 2) {
			setAuthorQuery('');
			return alert('Input field must be no less than 2 letters.');
		}
		dispatch(publishAuthor({ name: authorQuery }, user.token));
		setAuthorQuery('');
	};

	const selectAuthor = (author) => {
		setCourseForm({
			...courseForm,
			authors: [...courseForm.authors, { id: author.id, name: author.name }],
		});
	};

	const deleteSelectedAuthor = (selectedAuthor) => {
		typeof selectedAuthor === 'object'
			? setCourseForm({
					...courseForm,
					authors: courseForm.authors.filter(
						(author) => selectedAuthor.id !== author.id
					),
			  })
			: setCourseForm({
					...courseForm,
					authors: courseForm.authors.filter(
						(author) => selectedAuthor !== author
					),
			  });
	};

	const addDuration = (duration) => {
		setCourseForm({ ...courseForm, duration: parseFloat(duration) });
		if (duration.match(/[a-zA-Z]/)) {
			setCourseForm({ ...courseForm, duration: '' });
			return alert('Duration must be only digits');
		}
	};

	const validateForm = (form) => {
		if (
			!form.title ||
			!form.description ||
			!form.duration ||
			form.authors.length === 0
		) {
			throw new Error('Please fill all fields.');
		}
	};

	const dataPublish = (e) => {
		e.preventDefault();

		try {
			validateForm(courseForm);
			id
				? dispatch(
						modifyCourse(
							{
								...courseForm,
								authors: courseForm.authors.map((author) => {
									return typeof author === 'object' ? author.id : author;
								}),
							},
							id,
							user.token,
							() => history.push('/courses')
						)
				  )
				: dispatch(
						publishCourse(
							{
								...courseForm,
								authors: courseForm.authors.map((author) => author.id),
							},
							user.token,
							() => history.push('/courses')
						)
				  );
		} catch (error) {
			alert(error);
		}
	};

	return (
		<form data-testid='courseForm' onSubmit={(e) => dataPublish(e)}>
			<section className='row justify-content-between'>
				<div className='col-4'>
					<Input
						query={courseForm.title}
						onQueryChange={(myQuery) =>
							setCourseForm({
								...courseForm,
								title: myQuery,
							})
						}
						labelText='Title'
						placeholderText='Enter title...'
					/>
				</div>
				<div className='col-2 mt-4'>
					<Button
						type='submit'
						text={courseForm.id ? 'Update Course' : 'Create Course'}
						color='btn btn-outline-danger rounded-0'
					/>
				</div>
			</section>
			<section>
				<div className='col-12'>
					<label>Description</label>
				</div>
				<div className='form-floating mb-3'>
					<textarea
						value={courseForm.description}
						onChange={(e) =>
							setCourseForm({
								...courseForm,
								description: e.target.value,
							})
						}
						className='form-control border-warning'
						placeholder='Leave a comment here'
					/>
					<label>Description</label>
				</div>
			</section>
			<section className='card border-primary rounded-0 mb-3'>
				<div className='row'>
					<div className='col-6'>
						<div className='m-3'>
							<div>
								<h3 className='text-center'>Add author</h3>
								<Input
									query={authorQuery}
									onQueryChange={(myQuery) => setAuthorQuery(myQuery)}
									labelText='Author name'
									placeholderText='Enter author name...'
								/>
							</div>
							<div className='row justify-content-center'>
								<Button
									onClick={() => addAuthor()}
									text='Create author'
									color='col-4 btn btn-outline-success'
								/>
							</div>
							<br />
							<div>
								<h3 className='text-center m-4'>Duration</h3>
								<Input
									query={courseForm.duration}
									onQueryChange={(myDuration) => addDuration(myDuration)}
									labelText='Duration'
									placeholderText='Enter duration in minutes...'
								/>
								<h1>Duration: {formattedDuration}</h1>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='m-3'>
							<h3 className='text-center'>Authors</h3>
							{filteredAuthors.map((author) => (
								<div key={author.id} className='row mt-3'>
									<div className='col-6'>
										<p>{author.name}</p>
									</div>
									<div className='col-6'>
										<Button
											onClick={(e) => selectAuthor(author, e)}
											text='Add author'
											color='col-4 btn btn-outline-success'
										/>
									</div>
								</div>
							))}
							<h3 className='text-center mt-4'> Course authors</h3>
							{courseForm.authors.length === 0 ? (
								<p className='text-center'> Author list is empty</p>
							) : (
								courseForm.authors.map((author) => {
									return (
										<div key={author.id} className='row mt-3'>
											<div className='col-6'>
												<>
													{author.name ? (
														<p>{author.name}</p>
													) : (
														authors
															.filter((auth) => auth.id === author)
															.map((a) => <p>{a.name}</p>)
													)}
												</>
											</div>
											<div className='col-6'>
												<Button
													onClick={() => deleteSelectedAuthor(author)}
													text='Delete author'
													color='col-4 btn btn-outline-success'
												/>
											</div>
										</div>
									);
								})
							)}
						</div>
					</div>
				</div>
			</section>
		</form>
	);
};

export default CourseForm;
