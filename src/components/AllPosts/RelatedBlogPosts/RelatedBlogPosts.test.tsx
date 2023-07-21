import React from 'react';
import { usePathname } from 'next/navigation';

import RelatedBlogPosts from '@/components/AllPosts/RelatedBlogPosts';
import { RelatedBlogPostsProps } from '@/components/AllPosts/RelatedBlogPosts/types';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const props: RelatedBlogPostsProps = {
  lng: 'en',
  blogPostId: 0,
  category: 'business',
};

describe('RelatedBlogPosts', () => {
  it('renders a RelatedBlogPosts with the given data in english', () => {
    render(<RelatedBlogPosts {...props} />);

    expect(screen.getByText('What to read next')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText('Font sizes in UI design: The complete guide to follow')
    ).toBeInTheDocument();
    expect(screen.getByTestId('blopPostInfo').textContent).toBe('By  Jenny Wilson | May 23, 2022');
  });

  it('renders a RelatedBlogPosts with the given data in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    props.lng = 'ru';
    render(<RelatedBlogPosts {...props} />);

    expect(screen.getByText('Что почитать еще')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText('Font sizes in UI design: The complete guide to follow')
    ).toBeInTheDocument();
    expect(screen.getByTestId('blopPostInfo').textContent).toBe('От   Jenny Wilson | May 23, 2022');
  });
});
