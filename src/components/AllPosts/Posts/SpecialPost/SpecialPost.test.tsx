import React from 'react';

import SpecialPost from '@/components/AllPosts/Posts/SpecialPost';
import { render, screen } from '@testing-library/react';

describe('SpecialPost', () => {
  it('renders a SpecialPost in english', () => {
    render(<SpecialPost lng="en" />);

    expect(screen.getByText('Why we started')).toBeInTheDocument();
    expect(
      screen.getByText('It started out as a simple idea and evolved into our passion')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Discover our story >')).toBeInTheDocument();
  });

  it('renders a SpecialPost in russian', () => {
    render(<SpecialPost lng="ru" />);

    expect(screen.getByText('Почему мы начали')).toBeInTheDocument();
    expect(
      screen.getByText('Все началось с простой идеи и превратилось в нашу страсть')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо позвольте мне перейти к мельчайшим деталям, никто не должен заниматься никакой работой, кроме как какой-то человек.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Узнайте о нашей истории >')).toBeInTheDocument();
  });
});
