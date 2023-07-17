import React from 'react';

import Overview from '@/components/Overview';
import { render, screen } from '@testing-library/react';

describe('Overview', () => {
  it('renders a Overview in english ', () => {
    render(<Overview lng="en" />);

    expect(screen.getByText('12+')).toBeInTheDocument();
    expect(screen.getByText('18K+')).toBeInTheDocument();
    expect(screen.getByText('30K+')).toBeInTheDocument();
    expect(screen.getByText('Blogs Published')).toBeInTheDocument();
    expect(screen.getByText('Views on Finsweet')).toBeInTheDocument();
    expect(screen.getByText('Total active Users')).toBeInTheDocument();
  });

  it('renders a Overview in russian ', () => {
    render(<Overview lng="ru" />);

    expect(screen.getByText('12+')).toBeInTheDocument();
    expect(screen.getByText('18K+')).toBeInTheDocument();
    expect(screen.getByText('30K+')).toBeInTheDocument();
    expect(screen.getByText('Опубликованные блоги')).toBeInTheDocument();
    expect(screen.getByText('Просмотры на Finsweet')).toBeInTheDocument();
    expect(screen.getByText('Всего активных пользователей')).toBeInTheDocument();
  });
});
