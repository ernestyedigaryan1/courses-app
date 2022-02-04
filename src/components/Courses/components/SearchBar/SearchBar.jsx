import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
	let [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		if (searchQuery === '') {
			onSearch(searchQuery);
		}
	}, [searchQuery, onSearch]);

	return (
		<div className='mt-3 row col-9'>
			<div className='col-6'>
				<Input
					query={searchQuery}
					onQueryChange={(query) => setSearchQuery(query)}
					placeholderText='Enter course name...'
				/>
			</div>
			<div className='col-3'>
				<Button
					text='Search'
					color='btn btn-outline-primary rounded-0'
					onClick={() => onSearch(searchQuery)}
				/>
			</div>
		</div>
	);
};
export default SearchBar;
