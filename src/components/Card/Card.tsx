import React, { FunctionComponent, ReactNode } from 'react';
// Css
import './card.css';
// Context
import { useThemeContext } from '../../context/ThemeContext';

interface ICard {
	children: ReactNode | ReactNode[];
}

const Card: FunctionComponent<ICard> = ({ children }): JSX.Element => {
	const { theme } = useThemeContext();
	return (
		<section className={`${theme}-card card-container`}>{children}</section>
	);
};

export default Card;
