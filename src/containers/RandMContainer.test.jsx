import React from 'react';
import { render, screen } from '@testing-library/react';
import RandMContainer from './RandMContainer';
import { MemoryRouter } from 'react-router';

describe('RickAndMortyContainer', () => {
  it('renders a list of characters to the page', async () => {
    
    
    render(<MemoryRouter> <RandMContainer /> 
    </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
