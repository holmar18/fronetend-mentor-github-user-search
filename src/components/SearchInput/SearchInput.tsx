import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
// Css
import './searchInput.css';
// Context
import { useGithubSearchContext } from '../../context/GithubSearchContext';
import { useThemeContext } from '../../context/ThemeContext';
// constant
import { GITHUBSEARCH } from '../../constants/constants';

const SearchInput = () => {
	const { userName, error, handleInput, FechUser } = useGithubSearchContext();
	const { theme } = useThemeContext();

	return (
		<div className='search-container'>
			<BiSearchAlt2 className='search-icon' />
			<input
				id='git-search'
				className={`${theme}-input`}
				value={userName}
				type='search'
				name='user-input'
				placeholder={GITHUBSEARCH.searchPlaceholder}
				onChange={(e) => handleInput(e.target.value)}
			/>
			{error ? <h4 className='error-msg'>{GITHUBSEARCH.error}</h4> : null}
			<div className='btn-container'>
				<button onClick={() => FechUser()}>{GITHUBSEARCH.btnSearch}</button>
			</div>
		</div>
	);
};

export default SearchInput;
