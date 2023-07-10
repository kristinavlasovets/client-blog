import React from 'react';

import CategoriesListItem from '@/components/CategoriesListItem';
import { CategoriesListItemProps } from '@/components/CategoriesListItem/types';
import { render, screen } from '@testing-library/react';

const props: CategoriesListItemProps = {
  category: { title: 'Business', icon: '/assets/icons/business.svg' },
  isSelected: true,
};

describe('CategoriesListItem', () => {
  it('renders a CategoriesListItem with the given data', () => {
    render(<CategoriesListItem {...props} />);

    expect(screen.getByText(props.category.title)).toBeInTheDocument();
  });
});
