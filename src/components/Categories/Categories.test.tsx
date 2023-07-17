import React from 'react';
import { usePathname } from 'next/navigation';

import Categories from '@/components/Categories';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

describe('Categories', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');
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
