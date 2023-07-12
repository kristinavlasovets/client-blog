import React from 'react';
import { usePathname } from 'next/navigation';

import CategoriesList from '@/components/CategoriesList';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

describe('CategoriesList', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');

  it('renders a CategoriesList with the given data in english', () => {
    render(<CategoriesList lng="en" categoriesTitle="Technology" />);

    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Startup')).toBeInTheDocument();
    expect(screen.getByText('Economy')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
  });

  (usePathname as jest.Mock).mockImplementation(() => 'ru');

  it('renders a CategoriesList with the given data in russian', () => {
    render(<CategoriesList lng="ru" categoriesTitle="Technology" />);

    expect(screen.getByText('Категории')).toBeInTheDocument();
    expect(screen.getByText('Technology')).toBeInTheDocument();
    expect(screen.getByText('Startup')).toBeInTheDocument();
    expect(screen.getByText('Economy')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
  });
});
