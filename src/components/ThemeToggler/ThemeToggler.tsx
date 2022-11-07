import React, { FunctionComponent, useState } from 'react';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
// Css
import './themeToggler.css';
// Context
import { useThemeContext } from '../../context/ThemeContext/ThemeContext';
// constants
import { GITHUBSEARCH } from '../../constants/constants';

const ThemeToggler: FunctionComponent = (): JSX.Element => {
	const { theme, setTheme } = useThemeContext();

	return (
		<div className='theme-toggle-container'>
			{theme === 'dark' ? (
				<div onClick={() => setTheme('light')}>
					<h4 className={`${theme}-title`}>{GITHUBSEARCH.light}</h4>
					<BsFillSunFill className={`${theme}`} />
				</div>
			) : (
				<div onClick={() => setTheme('dark')}>
					<h4 className={`${theme}-title`}>{GITHUBSEARCH.dark}</h4>
					<BsFillMoonStarsFill className={`${theme}`} />
				</div>
			)}
		</div>
	);
};

export default ThemeToggler;
