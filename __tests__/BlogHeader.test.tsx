import React from 'react';

import BlogHeader from '@/components/BlogHeader';
import posts from '@/shared/posts.json';
import { render, screen } from '@testing-library/react';

const { title, preview } = posts[0];

describe('BlogHeader', () => {
  it('renders an BlogHeader in english', () => {
    render(<BlogHeader lng="en" />);

    expect(screen.getByText('Featured Post')).toBeInTheDocument();
    expect(screen.getByText('Read More >')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
  });

  it('renders an BlogHeader in russian', () => {
    render(<BlogHeader lng="ru" />);

    expect(screen.getByText('Популярный пост')).toBeInTheDocument();
    expect(screen.getByText('Читать далее >')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
  });
});
