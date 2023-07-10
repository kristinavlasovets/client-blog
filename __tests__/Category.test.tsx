import React from 'react';

import Category from '@/components/Category';
import { CategoryProps } from '@/components/Category/types';
import { render, screen } from '@testing-library/react';

const props: CategoryProps = {
  category: {
    title: 'Business',
    icon: '/assets/icons/business.svg',
    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
};

describe('Category', () => {
  it('renders a Category with the given data', () => {
    render(<Category {...props} />);

    expect(screen.getByAltText(props.category.title)).toBeInTheDocument();
    expect(screen.getByText(props.category.title)).toBeInTheDocument();
    expect(screen.getByText(props.category.info)).toBeInTheDocument();
  });
});
