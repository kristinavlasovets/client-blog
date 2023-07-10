import React from 'react';

import HomeHeader from '@/components/HomeHeader';
import authors from '@/shared/authors.json';
import posts from '@/shared/posts.json';
import { render, screen } from '@testing-library/react';

const { title, authorId, preview, category } = posts[0];
const { name } = authors.find((author) => author.id === authorId)!;

describe('HomeHeader', () => {
  it('renders a HomeHeader in english', () => {
    render(<HomeHeader lng="en" />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('Read More >')).toBeInTheDocument();
  });

  it('renders a HomeHeader in russian', () => {
    render(<HomeHeader lng="ru" />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
    expect(screen.getByText(category)).toBeInTheDocument();
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('Читать далее >')).toBeInTheDocument();
  });
});
