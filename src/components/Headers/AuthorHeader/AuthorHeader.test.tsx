import React from 'react';

import AuthorHeader from '@/components/Headers/AuthorHeader';
import { AuthorHeaderProps } from '@/components/Headers/AuthorHeader/types';
import { render, screen } from '@testing-library/react';

const propsInEnglish: AuthorHeaderProps = {
  lng: 'en',
  image: '/assets/images/authors/0.png',
  name: 'Floyd Miles',
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
};

const propsInRussian: AuthorHeaderProps = {
  lng: 'ru',
  image: '/assets/images/authors/0.png',
  name: 'Floyd Miles',
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
};

describe('AuthorHeader', () => {
  it('renders an AuthorHeader with the given data in english', () => {
    render(<AuthorHeader {...propsInEnglish} />);

    expect(screen.getByAltText(propsInEnglish.name)).toBeInTheDocument();
    expect(
      screen.getByText('Hey there, I’m Floyd Miles and welcome to my Blog')
    ).toBeInTheDocument();
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByAltText('instagram')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin')).toBeInTheDocument();
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByText(propsInEnglish.review)).toBeInTheDocument();
  });

  it('renders an AuthorHeader with the given data in english', () => {
    render(<AuthorHeader {...propsInRussian} />);

    expect(screen.getByAltText(propsInRussian.name)).toBeInTheDocument();
    expect(
      screen.getByText('Привет, меня зовут Floyd Miles и добро пожаловать в мой Блог')
    ).toBeInTheDocument();
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByAltText('instagram')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin')).toBeInTheDocument();
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByText(propsInRussian.review)).toBeInTheDocument();
  });
});
