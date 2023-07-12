import React from 'react';
import { usePathname } from 'next/navigation';

import Category from '@/components/Category';
import { CategoryProps } from '@/components/Category/types';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const props: CategoryProps = {
  category: {
    title: '',
    icon: '/assets/icons/business.svg',
    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
};

describe('Category', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');
  it('renders a Category with the given data', () => {
    render(<Category {...props} />);

    expect(screen.getByAltText(props.category.title)).toBeInTheDocument();
    expect(screen.getByText(props.category.info)).toBeInTheDocument();
  });
});
