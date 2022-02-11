const Input = ({ query, type, onQueryChange, labelText, placeholderText }) => (
	<div className='mb-3'>
		{labelText ? <label>{labelText}</label> : <></>}
		<input
			value={query}
			type={type || 'text'}
			onChange={(e) => onQueryChange(e.target.value)}
			className='form-control border-success rounded-0'
			aria-label={labelText}
			placeholder={placeholderText}
		/>
	</div>
);

export default Input;
