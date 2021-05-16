import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
//import { MemoryRouter } from 'react-router-dom';
import RandMContainer from './RandMContainer';

describe('List page', () => {
	

	it('renders the list page', async () => {
		render(
			
				<RandMContainer />
			
		);
		
		screen.getByText('Loading!');

		const ul = await screen.findByRole('list', { name: 'characters' });

		expect(ul).toBeInTheDocument();
		expect(ul).toMatchSnapshot();
	});

})
