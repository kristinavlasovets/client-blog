import React from 'react';
import { usePathname } from 'next/navigation';

import RelatedBlogPost from '@/components/AllPosts/RelatedBlogPosts/RelatedBlogPost';
import { RelatedBlogPostProps } from '@/components/AllPosts/RelatedBlogPosts/RelatedBlogPost/types';
import authors from '@/shared/authors.json';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

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
};

const { name } = authors.find((author) => author.id === props.blogPost.authorId)!;

describe('RelatedBlogPost', () => {
  it('renders a RelatedBlogPost with the given data in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
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
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
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
