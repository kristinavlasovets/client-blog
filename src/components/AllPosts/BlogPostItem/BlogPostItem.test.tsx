import React from 'react';
import { usePathname } from 'next/navigation';

import BlogPostItem from '@/components/AllPosts/BlogPostItem';
import { BlogPostItemProps } from '@/components/AllPosts/BlogPostItem/types';
import authors from '@/shared/authors.json';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const props: BlogPostItemProps = {
  blogPost: {
    category: 'business',
    preview:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    title: 'Step-by-step guide to choosing great font pairs',
    authorId: 0,
    id: 0,
    image: '/assets/images/macbook-man.png',
    createdAt: 'May 23, 2022',
  },
};

const currentAuthor = authors.find(({ id }) => id === +props.blogPost.authorId)!;

describe('BlogPostItem', () => {
  it('renders an BlogPostItem with the given data in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(<BlogPostItem {...props} />);

    expect(screen.getByAltText(props.blogPost.category)).toBeInTheDocument();
    expect(screen.getByAltText(currentAuthor.name)).toBeInTheDocument();
    expect(screen.getByText(`Posted on ${props.blogPost.createdAt}`)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.text)).toBeInTheDocument();
  });

  it('renders an BlogPostItem with the given data in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(<BlogPostItem {...props} />);

    expect(screen.getByAltText(props.blogPost.category)).toBeInTheDocument();
    expect(screen.getByAltText(currentAuthor.name)).toBeInTheDocument();
    expect(screen.getByText(`Опубликовано ${props.blogPost.createdAt}`)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(props.blogPost.text)).toBeInTheDocument();
  });
});
