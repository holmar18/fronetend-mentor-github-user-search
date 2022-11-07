import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders learn react link', () => {
	render(<Title text='test' />);
	const text = screen.getByText(/test/i);
	expect(text).toBeInTheDocument();
});
