import { useState } from 'react';
import humanizeDuration from 'humanize-duration';
import Moment from 'react-moment';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { generateID, validateInput } from '../../common/common';

const CreateCourse = ({ onSendCourse, onToggle, onAddAuthor, authors }) => {
	let [title, setTitle] = useState('');
	let [description, setDescription] = useState('');
	let [authorQuery, setAuthorQuery] = useState('');
	let [selectedAuthors, setSelectedAuthors] = useState([]);
	let [duration, setDuration] = useState('');

	const formattedDuration = humanizeDuration(duration * 60000);

	const addAuthor = () => {
		if (authorQuery.length < 2) {
			setAuthorQuery('');
			return alert('Input field must be no less than 2 letters.');
		}
		onAddAuthor({ id: generateID(), name: authorQuery });
		setAuthorQuery('');
	};

	const selectAuthor = (author) => {
		setSelectedAuthors([
			...selectedAuthors,
			{ id: author.id, name: author.name },
		]);
	};

	const deleteSelectedAuthor = (selectedAuthor) => {
		setSelectedAuthors(
			selectedAuthors.filter((author) => selectedAuthor.id !== author.id)
		);
	};

	const addDuration = (duration) => {
		setDuration(duration);
		if (duration.match(/[a-zA-Z]/)) {
			setDuration('');
			return alert('Duration must be only digits');
		}
	};

	const dataPublish = () => {
		let courseInfo = {
			id: generateID(),
			title: title,
			description: description,
			creationDate: <Moment date={new Date()} format='DD/MM/YYYY' />,
			duration: parseFloat(duration),
			authors: selectedAuthors.map((item) => item.id),
		};
		if (title && description && duration && authors) {
			onSendCourse(courseInfo);
			return onToggle();
		}
		alert('Please, fill in all fields');
	};

	return (
		<div className='container-fluid card border-primary rounded-0'>
			<section className='row justify-content-between'>
				<div className='col-4'>
					<label>Title</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						onBlur={() => validateInput(title, setTitle)}
						aria-label='Enter title...'
						placeholder='Enter title...'
						className='form-control border-success rounded-0'
					/>
				</div>
				<div className='col-2 mt-4'>
					<Button
						onClick={() => dataPublish()}
						text='Create course'
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
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						onBlur={() => validateInput(description, setDescription)}
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
								<label>Author name</label>
								<Input
									query={authorQuery}
									onQueryChange={(myQuery) => setAuthorQuery(myQuery)}
									labelText='Enter author name...'
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
								<label>Duration</label>
								<Input
									query={duration}
									onQueryChange={(myDuration) => addDuration(myDuration)}
									labelText='Enter duration in minutes...'
									placeholderText='Enter duration in minutes...'
								/>
								<h1>Duration: {formattedDuration}</h1>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='m-3'>
							<h3 className='text-center'>Authors</h3>
							{authors.map((author) => {
								return JSON.stringify(selectedAuthors).includes(
									JSON.stringify(author)
								) ? (
									<></>
								) : (
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
								);
							})}
							<h3 className='text-center mt-4'> Course authors</h3>
							{selectedAuthors.length === 0 ? (
								<p className='text-center'> Author list is empty</p>
							) : (
								selectedAuthors.map((author) => {
									return (
										<div key={author.id} className='row mt-3'>
											<div className='col-6'>
												<p>{author.name}</p>
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
		</div>
	);
};

export default CreateCourse;
