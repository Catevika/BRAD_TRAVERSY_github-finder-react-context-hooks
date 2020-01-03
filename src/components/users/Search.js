import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = () => {
	const GithubContext = useContext(githubContext);
	const AlertContext = useContext(alertContext);
	const [text, setText] = useState('');

	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			AlertContext.setAlert('Please enter something', 'light');
			// light is a type of alert which is of grey color
		} else {
			GithubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = e => setText(e.target.value);

	return (
		<div>
			<form onSubmit={onSubmit} className='form'>
				<input
					input='text'
					name='text'
					placeholder='Search users...'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{GithubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={GithubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
