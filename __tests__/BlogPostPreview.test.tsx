import React from 'react';

import BlogPostPreview from '@/components/BlogPostPreview';
import { BlogPostPreviewProps } from '@/components/BlogPostPreview/types';
import authors from '@/shared/authors.json';
import { render, screen } from '@testing-library/react';

const propsInEnglish: BlogPostPreviewProps = {
  lng: 'en',
  post: {
    title: 'Step-by-step guide to choosing great font pairs',
    authorId: 0,
    id: 0,
    createdAt: 'May 23, 2022',
  },
};

const { name } = authors.find((author) => author.id === propsInEnglish.post.authorId)!;

describe('BlogPostPreview', () => {
  it('renders an BlogPostPreview with the given data in english', () => {
    render(<BlogPostPreview {...propsInEnglish} />);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(propsInEnglish.post.title)).toBeInTheDocument();
  });
});
