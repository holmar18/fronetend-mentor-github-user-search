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
	const { userName, setUserName, FechUser } = useGithubSearchContext();
	const { theme } = useThemeContext();

	return (
		<div className='search-container'>
			<BiSearchAlt2 className='search-icon' />
			<input
				className={`${theme}-input`}
				value={userName}
				type='search'
				name='user-input'
				placeholder={GITHUBSEARCH.searchPlaceholder}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<div className='btn-container'>
				<button onClick={() => FechUser()}>Search</button>
			</div>
		</div>
	);
};

export default SearchInput;
