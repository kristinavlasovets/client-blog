import React from 'react';

import JoinOurTeam from '@/components/JoinOurTeam';
import { render, screen } from '@testing-library/react';

describe('JoinOurTeam', () => {
  it('renders a JoinOurTeam in english', () => {
    render(<JoinOurTeam lng="en" />);

    expect(screen.getByText('Join our team to be a part of our story')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Join now')).toBeInTheDocument();
  });

  it('renders a JoinOurTeam in russian', () => {
    render(<JoinOurTeam lng="ru" />);

    expect(
      screen.getByText('Присоединяйтесь к нашей команде и станьте частью нашей истории')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Для клиента очень важно следовать обучению клиента, но это то, что происходит одновременно'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Присоединиться сейчас')).toBeInTheDocument();
  });
});
