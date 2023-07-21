import React from 'react';
import { usePathname } from 'next/navigation';

import NavMenu from '@/components/NavMenu';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

describe('NavMenu', () => {
  it('renders a NavMenu for Footer in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(<NavMenu variant="footer" />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders a NavMenu for Footer in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(<NavMenu variant="footer" />);

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(screen.getByText('Свяжись с нами')).toBeInTheDocument();
    expect(screen.getByText('Политика конфиденциальности')).toBeInTheDocument();
  });
});
