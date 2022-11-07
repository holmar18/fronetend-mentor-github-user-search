import React, { FunctionComponent, ReactNode } from 'react';
import './header.css';

interface Iheader {
	children: ReactNode | ReactNode[];
}

const Header: FunctionComponent<Iheader> = ({ children }): JSX.Element => {
	return <header className='themeToggler-container'>{children}</header>;
};

export default Header;
