import React from 'react';

import Block from '@/components/Block';
import { render, screen } from '@testing-library/react';

describe('Block', () => {
  it('renders a heading', () => {
    render(<Block lng="en" />);

    expect(screen.getByText('BLOCK TEXT')).toBeInTheDocument();
  });
});
