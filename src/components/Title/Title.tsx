import React, { FunctionComponent } from 'react';
import './title.css';
// Context
import { useThemeContext } from '../../context/ThemeContext';

interface Ititle {
	text: string;
}

const Title: FunctionComponent<Ititle> = ({ text }): JSX.Element => {
	const { theme } = useThemeContext();
	return (
		<>
			<h1 className={`${theme} title`}>{text}</h1>
		</>
	);
};

export default Title;
