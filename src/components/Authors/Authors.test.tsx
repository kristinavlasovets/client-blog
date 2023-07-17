import React from 'react';

import Authors from '@/components/Authors';
import { render, screen } from '@testing-library/react';

describe('Authors', () => {
  it('renders an Authors in english via home variant', () => {
    render(<Authors lng="en" variant="home" />);

    expect(screen.getByText('List of Authors')).toBeInTheDocument();
  });

  it('renders an Authors in russian via home variant', () => {
    render(<Authors lng="ru" variant="home" />);

    expect(screen.getByText('Список авторов')).toBeInTheDocument();
  });

  it('renders an Authors in english via alternate variant', () => {
    render(<Authors lng="en" variant="" />);

    expect(screen.getByText('List of Authors')).toBeInTheDocument();
  });

  it('renders an Authors in russian via alternate variant', () => {
    render(<Authors lng="ru" variant="" />);

    expect(screen.getByText('Список авторов')).toBeInTheDocument();
  });
});
