import React, { ReactNode, FunctionComponent } from 'react';
import './layout.css';
// Context
import { useThemeContext } from '../../context/ThemeContext';

interface Ilayout {
	children: ReactNode | ReactNode[];
}

const LayoutMain: FunctionComponent<Ilayout> = ({ children }): JSX.Element => {
	const { theme } = useThemeContext();
	return (
		<div className={`${theme}-body-container body-container`}>
			<div className='main-inner-container'>{children}</div>
		</div>
	);
};

export default LayoutMain;
