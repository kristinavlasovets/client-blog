import React from 'react';
import { usePathname } from 'next/navigation';

import BlogHeader from '@/components/Headers/BlogHeader';
import posts from '@/shared/posts.json';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const { title, preview } = posts[0];

describe('BlogHeader', () => {
  it('renders an BlogHeader in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(<BlogHeader />);

    expect(screen.getByText('Featured Post')).toBeInTheDocument();
    expect(screen.getByText('Read More >')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
  });

  it('renders an BlogHeader in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(<BlogHeader />);

    expect(screen.getByText('Популярный пост')).toBeInTheDocument();
    expect(screen.getByText('Читать далее >')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
  });
});
