import React from 'react';

import PostItem from '@/components/AllPosts/Posts/PostItem';
import { Post } from '@/components/AllPosts/Posts/types';
import { render, screen } from '@testing-library/react';

const props: Post = {
  id: 0,
  title: 'Step-by-step guide to choosing great font pairs',
  category: 'business',
  image: '/assets/images/macbook-man.png',
  preview:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
};

describe('PostItem', () => {
  it('renders a PostItem with the given data', () => {
    render(<PostItem {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.category)).toBeInTheDocument();
    expect(screen.getByText(props.preview)).toBeInTheDocument();
  });
});
