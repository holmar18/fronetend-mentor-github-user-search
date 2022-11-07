import {
	useContext,
	createContext,
	useState,
	FunctionComponent,
	ReactNode,
	useEffect,
} from 'react';
// Service
import { GetUser } from '../../service/GetUser';
// types
import { IGitUserProfile } from '../../types/User';
// Constants
import { DEFAULTDATA } from '../../constants/constants';

type GithubSearchType = {
	userName: string;
	userData: any;
	error: boolean;
	handleInput: Function;
	FechUser: Function;
};

interface ITheme {
	children: ReactNode | ReactNode[];
}

// Create empty context
export const GithubSearch = createContext<GithubSearchType>({
	userName: '',
	userData: null,
	error: false,
	handleInput: Function,
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
	const [error, setError] = useState<boolean>(false);
	const [userData, setUserData] = useState<any>(DEFAULTDATA);

	useEffect(() => {
		return () => {
			setUserData(null);
		};
	}, []);

	const FechUser = () => {
		// Empty usersname so skip fecthing the results
		if (userName.length === 0) return;
		GetUser(userName, (CB: IGitUserProfile) => {
			if (CB.message !== 'Not Found') {
				setUserData(CB);
				// remove value from the search input
				setUserName('');
			} else {
				setError(true);
			}
		});
	};

	const handleInput = (val: string) => {
		if (error) setError((prev) => !prev);

		setUserName(val);
	};

	return (
		<GithubSearch.Provider
			value={{
				userName: userName,
				userData: userData,
				error: error,
				handleInput: handleInput,
				FechUser: FechUser,
			}}
		>
			{children}
		</GithubSearch.Provider>
	);
};
