import Input from '../Input/Input';
import Button from '../Button/Button';

const SearchBar = ({ query, onChange, onClick }) => (
	<div className='mt-3 row col-9'>
		<div className='col-6'>
			<Input
				query={query}
				onQueryChange={onChange}
				labelText='Enter course name...'
				placeholderText='Enter course name...'
			/>
		</div>
		<div className='col-3'>
			<Button
				text='Search'
				color='btn btn-outline-primary rounded-0'
				onClick={onClick}
			/>
		</div>
	</div>
);

export default SearchBar;
