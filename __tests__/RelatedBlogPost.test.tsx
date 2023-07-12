import React from 'react';

import RelatedBlogPost from '@/components/RelatedBlogPost';
import { RelatedBlogPostProps } from '@/components/RelatedBlogPost/types';
import authors from '@/shared/authors.json';
import { render, screen } from '@testing-library/react';

const props: RelatedBlogPostProps = {
  blogPost: {
    id: 3,
    title: 'Font sizes in UI design: The complete guide to follow',
    category: 'economy',
    authorId: 3,
    createdAt: 'May 23, 2022',
    preview:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    image: '/assets/images/two-women.png',
  },
  lng: 'en',
};

const { name } = authors.find((author) => author.id === props.blogPost.authorId)!;

describe('RelatedBlogPost', () => {
  it('renders a RelatedBlogPost with the given data in english', () => {
    render(<RelatedBlogPost {...props} />);

    expect(screen.getByText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByAltText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.preview)).toBeInTheDocument();
    expect(screen.getByTestId('blopPostInfo').textContent).toBe(
      `By  ${name} | ${props.blogPost.createdAt}`
    );
  });

  it('renders a RelatedBlogPost with the given data in russian', () => {
    props.lng = 'ru';
    render(<RelatedBlogPost {...props} />);

    expect(screen.getByText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByAltText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.preview)).toBeInTheDocument();
    expect(screen.getByTestId('blopPostInfo').textContent).toBe(
      `От   ${name} | ${props.blogPost.createdAt}`
    );
  });
});
