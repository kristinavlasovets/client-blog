import React from 'react';

import Header from '@/components/Header/client';
import HeaderBase from '@/components/Header/HeaderBase';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders a heading', () => {
    render(<Header lng="en" />);
  });
  it('renders a heading', () => {
    render(<HeaderBase lng="en" />);

    expect(screen.getByText('Modsen Client Blog')).toBeInTheDocument();
  });
});
