import React from 'react';

import AboutHeader from '@/components/Headers/AboutHeader';
import { render, screen } from '@testing-library/react';

describe('AboutHeader', () => {
  it('renders an AboutHeader in english', () => {
    render(<AboutHeader lng="en" />);

    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(
      screen.getByText('We are a team of content writers who share their learnings')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      )
    ).toBeInTheDocument();
  });

  it('renders an AboutHeader in russian', () => {
    render(<AboutHeader lng="ru" />);

    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(
      screen.getByText('Мы команда авторов контента, которые делятся своими знаниями')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы.'
      )
    ).toBeInTheDocument();
  });
});
