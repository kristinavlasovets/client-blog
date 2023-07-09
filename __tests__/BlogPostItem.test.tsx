import React from 'react';

import BlogPostItem from '@/components/BlogPostItem';
import { BlogPostItemProps } from '@/components/BlogPostItem/types';
import authors from '@/shared/authors.json';
import { render, screen } from '@testing-library/react';

const propsInEnglish: BlogPostItemProps = {
  lng: 'en',
  blogPost: {
    category: 'business',
    preview:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    title: 'Step-by-step guide to choosing great font pairs',
    authorId: 0,
    id: 0,
    image: '/assets/images/macbook-man.png',
    createdAt: '2023-07-01T14:20:00.000Z',
  },
};

const propsInRussian: BlogPostItemProps = {
  lng: 'ru',
  blogPost: {
    category: 'business',
    preview:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    title: 'Step-by-step guide to choosing great font pairs',
    authorId: 0,
    id: 0,
    image: '/assets/images/macbook-man.png',
    createdAt: '2023-07-01T14:20:00.000Z',
  },
};

const currentAuthor = authors.find(({ id }) => id === +propsInEnglish.blogPost.authorId)!;

describe('BlogPostItem', () => {
  it('renders an BlogPostItem with the given data in english', () => {
    render(<BlogPostItem {...propsInEnglish} />);

    expect(screen.getByAltText(propsInEnglish.blogPost.category)).toBeInTheDocument();
    expect(screen.getByAltText(currentAuthor.name)).toBeInTheDocument();
    expect(screen.getByText(`Posted on ${propsInEnglish.blogPost.createdAt}`)).toBeInTheDocument();
    expect(screen.getByText(propsInEnglish.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(propsInEnglish.blogPost.text)).toBeInTheDocument();
  });

  it('renders an BlogPostItem with the given data in russian', () => {
    render(<BlogPostItem {...propsInRussian} />);

    expect(screen.getByAltText(propsInRussian.blogPost.category)).toBeInTheDocument();
    expect(screen.getByAltText(currentAuthor.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Опубликовано ${propsInRussian.blogPost.createdAt}`)
    ).toBeInTheDocument();
    expect(screen.getByText(propsInRussian.blogPost.title)).toBeInTheDocument();
    expect(screen.getByText(propsInRussian.blogPost.text)).toBeInTheDocument();
  });
});
