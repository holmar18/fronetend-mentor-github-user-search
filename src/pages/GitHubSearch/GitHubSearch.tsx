import React from 'react';
// style
import './githubSearch.css';
// Components
import { LayoutMain } from '../../components/Layout';
import { ThemeToggler } from '../../components/ThemeToggler';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import { SearchInput } from '../../components/SearchInput';
// Context
import { ThemeContextProvider } from '../../context/ThemeContext';
import { GithubSearchContext } from '../../context/GithubSearchContext';

const GitHubSearch = () => {
	return (
		<ThemeContextProvider>
			<GithubSearchContext>
				<LayoutMain>
					<section className='themeToggler-container'>
						<Title text='devfinder' />
						<ThemeToggler />
					</section>
					<Card>
						<SearchInput />
					</Card>
				</LayoutMain>
			</GithubSearchContext>
		</ThemeContextProvider>
	);
};

export default GitHubSearch;
