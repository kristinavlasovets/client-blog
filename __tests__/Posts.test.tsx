import React from 'react';

import Posts from '@/components/Posts';
import { PostsProps } from '@/components/Posts/types';
import { fireEvent, render, screen } from '@testing-library/react';

const props: PostsProps = {
  postsTitle: 'Posts',
  lng: 'en',
  posts: [
    {
      id: 0,
      title: 'Step-by-step guide to choosing great font pairs',
      category: 'business',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 1,
      title: '8 Figma design systems that you can download for free today',
      category: 'technology',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 2,
      title: 'Font sizes in UI design: The complete guide to follow',
      category: 'business',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 3,
      title: 'Font sizes in UI design: The complete guide to follow',
      category: 'economy',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 4,
      title: 'Logo design trends to avoid in 2023',
      category: 'startup',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 5,
      title: 'How to build rapport with your web design clients',
      category: 'technology',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 6,
      title: '8 Figma design systems that you can download for free today',
      category: 'testing',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 7,
      title: 'How to build rapport with your web design clients',
      category: 'economy',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
    {
      id: 8,
      title: 'Font sizes in UI design: The complete guide to follow',
      category: 'economy',
      preview: 'Duis aute irure dolor in reprehenderit.',
      image: '/assets/images/macbook-man.png',
    },
  ],
};

const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe('Posts', () => {
  it('renders a Posts with the given data in english', () => {
    render(<Posts {...props} />);

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('< Prev')).toBeInTheDocument();
    expect(screen.getByText('Next >')).toBeInTheDocument();
  });

  it('renders a Posts with the first five posts', () => {
    render(<Posts {...props} />);

    props.posts.forEach(({ title, id }) => {
      if (id <= 0) expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders a Posts and navigate to the next page', () => {
    render(<Posts {...props} />);

    const nextButton = screen.getByText('Next >');
    fireEvent.click(nextButton);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });

  it('renders a Posts and navigate to the previous page', () => {
    render(<Posts {...props} />);

    const nextButton = screen.getByText('Next >');
    fireEvent.click(nextButton);

    expect(screen.getByText('testing')).toBeInTheDocument();

    const prevButton = screen.getByText('< Prev');
    fireEvent.click(prevButton);

    expect(screen.getByText('startup')).toBeInTheDocument();
  });

  it('renders a Posts with the given data in russian', () => {
    props.lng = 'ru';
    render(<Posts {...props} />);

    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('< Назад')).toBeInTheDocument();
    expect(screen.getByText('Вперед >')).toBeInTheDocument();
  });
});
