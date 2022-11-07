import {
	useContext,
	createContext,
	useState,
	FunctionComponent,
	ReactNode,
} from 'react';

type Ttheme = 'dark' | 'light';

type ThemeType = {
	theme: Ttheme;
	setTheme: Function;
};

interface ITheme {
	children: ReactNode | ReactNode[];
}

// Create empty context
export const ThemeContext = createContext<ThemeType>({
	theme: 'dark',
	setTheme: Function,
});

// Create a hook to use the context
export function useThemeContext() {
	return useContext(ThemeContext);
}

export const ThemeContextProvider: FunctionComponent<ITheme> = ({
	children,
}): JSX.Element => {
	const [theme, setTheme] = useState<Ttheme>('dark');
	return (
		<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
