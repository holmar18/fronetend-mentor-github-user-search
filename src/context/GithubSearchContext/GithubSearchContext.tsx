import {
	useContext,
	createContext,
	useState,
	FunctionComponent,
	ReactNode,
} from 'react';

type GithubSearchType = {
	userName: string;
	setUserName: Function;
	FechUser: Function;
};

interface ITheme {
	children: ReactNode | ReactNode[];
}

// Create empty context
export const GithubSearch = createContext<GithubSearchType>({
	userName: '',
	setUserName: Function,
	FechUser: Function,
});

// Create a hook to use the context
export function useGithubSearchContext() {
	return useContext(GithubSearch);
}

export const GithubSearchContext: FunctionComponent<ITheme> = ({
	children,
}): JSX.Element => {
	const [userName, setUserName] = useState<string>('');

	const FechUser = () => {
		console.log('Fetching user');
	};

	return (
		<GithubSearch.Provider
			value={{
				userName: userName,
				setUserName: setUserName,
				FechUser: FechUser,
			}}
		>
			{children}
		</GithubSearch.Provider>
	);
};
