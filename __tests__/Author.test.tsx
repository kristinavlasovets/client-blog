import React from 'react';

import Author from '@/components/Author';
import { AuthorProps } from '@/components/Author/types';
import { render, screen } from '@testing-library/react';

const props: AuthorProps = {
  id: 0,
  image: '/assets/images/authors/0.png',
  name: 'Floyd Miles',
  post: 'Content Writer',
  company: '@Company',
  from: 'Paris, France',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
};

describe('Author', () => {
  it('renders an Author with the given data', () => {
    render(<Author {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByAltText(props.name)).toBeInTheDocument();
    expect(screen.getByText(`${props.post} ${props.company}`)).toBeInTheDocument();
  });
});
