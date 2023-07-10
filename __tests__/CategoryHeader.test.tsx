import React from 'react';

import CategoryHeader from '@/components/CategoryHeader';
import { CategoryHeaderProps } from '@/components/CategoryHeader/types';
import { render, screen } from '@testing-library/react';

const propsInEnglish: CategoryHeaderProps = {
  category: {
    title: 'Business',
    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  lng: 'en',
};

const propsInRussian: CategoryHeaderProps = {
  category: {
    title: 'Business',
    info: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  lng: 'ru',
};

describe('CategoryHeader', () => {
  it('renders a CategoryHeader with the given data in english', () => {
    render(<CategoryHeader {...propsInEnglish} />);

    expect(screen.getByText(propsInEnglish.category.title)).toBeInTheDocument();
    expect(screen.getByText(propsInEnglish.category.info)).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('renders a CategoryHeader with the given data in russian', () => {
    render(<CategoryHeader {...propsInRussian} />);

    expect(screen.getByText(propsInRussian.category.title)).toBeInTheDocument();
    expect(screen.getByText(propsInRussian.category.info)).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
  });
});
