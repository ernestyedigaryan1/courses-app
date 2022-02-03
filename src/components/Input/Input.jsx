const Input = ({ query, onQueryChange, labelText, placeholderText }) => (
	<div className='mb-3'>
		<input
			value={query}
			type='text'
			onChange={(e) => onQueryChange(e.target.value)}
			className='form-control border-success rounded-0'
			aria-label={labelText}
			placeholder={placeholderText}
		/>
	</div>
);

export default Input;
