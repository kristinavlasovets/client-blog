import React from 'react';
import { usePathname } from 'next/navigation';

import TagsSearch from '@/components/SearchBlock/TagsSearch';
import { TagsSearchProps } from '@/components/SearchBlock/TagsSearch/types';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('next/navigation');
const mockHandleChooseTag = jest.fn();
const props: TagsSearchProps = {
  handleChooseTag: () => () => mockHandleChooseTag(),
};

describe('TagsSearch', () => {
  it('renders a TagsSearch in english', () => {
    render(<TagsSearch {...props} />);

    expect(screen.getByPlaceholderText('Search for tag...')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('renders a TagsSearch in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(<TagsSearch {...props} />);

    expect(screen.getByPlaceholderText('Искать тег...')).toBeInTheDocument();
    expect(screen.getByText('Поиск')).toBeInTheDocument();
  });

  it('renders a TagsSearch and searches for tags starting with the specific beggining', () => {
    render(<TagsSearch {...props} />);

    const input = screen.getByTestId('tagsSearchInput');
    fireEvent.change(input, { target: { value: 's' } });

    expect(screen.getByText('startup')).toBeInTheDocument();
    expect(screen.getByText('spot on')).toBeInTheDocument();
    expect(screen.getByText('software')).toBeInTheDocument();
  });
});
