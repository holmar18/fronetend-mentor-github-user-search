import React, { FunctionComponent } from 'react';
// style
import './githubSearch.css';
// Components
import { LayoutMain } from '../../components/Layout/LayoutMain';
import { Card } from '../../components/Card';
import { SearchInput } from '../../components/SearchInput';
import { ThemeToggler } from '../../components/ThemeToggler';
import { Title } from '../../components/Title';
import { Header } from '../../components/Layout/Header';
import { UserInfoDisplay } from './UserInfoDisplay';
// Context
import { ThemeContextProvider } from '../../context/ThemeContext';
import { GithubSearchContext } from '../../context/GithubSearchContext';

const GitHubSearch: FunctionComponent<{}> = (): JSX.Element => {
	return (
		<ThemeContextProvider>
			<GithubSearchContext>
				<LayoutMain>
					<Header>
						<Title text='devfinder' />
						<ThemeToggler />
					</Header>
					<Card>
						<SearchInput />
					</Card>
					<Card>
						<UserInfoDisplay />
					</Card>
				</LayoutMain>
			</GithubSearchContext>
		</ThemeContextProvider>
	);
};

export default GitHubSearch;
