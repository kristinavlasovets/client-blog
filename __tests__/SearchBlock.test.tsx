import React from 'react';
import { usePathname } from 'next/navigation';

import SearchBlock from '@/components/SearchBlock';
import { SearchBlockProps } from '@/components/SearchBlock/types';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('next/navigation');

const mockHandleChooseTag = jest.fn();
const props: SearchBlockProps = {
  lng: 'en',
  currentCategory: 'business',
  handleChooseTag: () => () => mockHandleChooseTag(),
};

describe('SearchBlock', () => {
  (usePathname as jest.Mock).mockImplementation(() => 'en');
  it('renders a SearchBlock with the given data in english and chooses a specific tag', () => {
    render(<SearchBlock {...props} />);

    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('All tags')).toBeInTheDocument();
    const tag = screen.getByText('spot on')!;
    fireEvent.click(tag);
    expect(mockHandleChooseTag).toBeCalled();
  });

  (usePathname as jest.Mock).mockImplementation(() => 'ru');
  it('renders a SearchBlock with the given data in russian and chooses a specific tag', () => {
    props.lng = 'ru';
    render(<SearchBlock {...props} />);

    expect(screen.getByText('Категории')).toBeInTheDocument();
    expect(screen.getByText('Все теги')).toBeInTheDocument();
    const tag = screen.getByText('spot on');
    fireEvent.click(tag);
    expect(mockHandleChooseTag).toBeCalled();
  });
});
