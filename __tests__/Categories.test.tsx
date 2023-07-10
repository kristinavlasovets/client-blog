import React from 'react';

import Categories from '@/components/Categories';
import { render, screen } from '@testing-library/react';

describe('Categories', () => {
  it('renders a Categories with the given data via center title-align', () => {
    render(<Categories titleAlign="center" categoriesTitle="All Categories" />);

    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.queryByText('All Categories')).toHaveStyle('text-align:center');
  });

  it('renders a Categories with the given data via left title-align', () => {
    render(<Categories titleAlign="left" categoriesTitle="All Categories" />);

    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.queryByText('All Categories')).toHaveStyle('text-align:left');
  });
});
