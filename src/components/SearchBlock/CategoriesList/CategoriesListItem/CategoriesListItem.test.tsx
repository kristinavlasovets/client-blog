import React from 'react';
import { usePathname } from 'next/navigation';

import CategoriesListItem from '@/components/SearchBlock/CategoriesList/CategoriesListItem';
import { CategoriesListItemProps } from '@/components/SearchBlock/CategoriesList/CategoriesListItem/types';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const props: CategoriesListItemProps = {
  category: { title: 'Business', icon: '/assets/icons/business.svg' },
  isSelected: true,
};

describe('CategoriesListItem', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');
  it('renders a CategoriesListItem with the given data', () => {
    render(<CategoriesListItem {...props} />);

    expect(screen.getByText(props.category.title)).toBeInTheDocument();
  });
});
