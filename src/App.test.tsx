import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './components/Search';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Github Repo/i);
  expect(linkElement).toBeInTheDocument();
});
