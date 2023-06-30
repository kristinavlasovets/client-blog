import React from 'react';

import Header from '@/components/Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render without crashing', async () => {
    render(await Header({ lng: 'en' }));

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
  });
});
