import React from 'react';

import AboutTeam from '@/components/AboutTeam';
import { render, screen } from '@testing-library/react';

describe('AboutTeam', () => {
  it('renders an AboutTeam in english via textLeft variant', () => {
    render(
      <AboutTeam
        variant="textLeft"
        label="Our team of creatives"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        src="/assets/images/group-of-hands.png"
        alt="Our team of creatives"
        shape="/assets/images/shapes.png"
      />
    );

    expect(screen.getByText('Our team of creatives')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
      )
    ).toBeInTheDocument();
  });

  it('renders an AboutTeam in english via textRight variant', () => {
    render(
      <AboutTeam
        variant="textRight"
        label="Our team of creatives"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        src="/assets/images/group-of-hands.png"
        alt="Our team of creatives"
        shape="/assets/images/shapes.png"
      />
    );

    expect(screen.getByText('Our team of creatives')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
      )
    ).toBeInTheDocument();
  });

  it('renders an AboutTeam in russian via textLeft variant', () => {
    render(
      <AboutTeam
        variant="textLeft"
        label="Наша креативная команда"
        title="Для клиента очень важно следовать обучению клиента, но это то, что происходит одновременно."
        text="Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не сердитесь на боль в укор, в наслаждении он хочет быть перышком от боли и убежать."
        src="/assets/images/group-of-hands.png"
        alt="Наша креативная команда"
        shape="/assets/images/shapes.png"
      />
    );

    expect(screen.getByText('Наша креативная команда')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Для клиента очень важно следовать обучению клиента, но это то, что происходит одновременно.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не сердитесь на боль в укор, в наслаждении он хочет быть перышком от боли и убежать.'
      )
    ).toBeInTheDocument();
  });

  it('renders an AboutTeam in russian via textRight variant', () => {
    render(
      <AboutTeam
        variant="textRight"
        label="Наша креативная команда"
        title="Для клиента очень важно следовать обучению клиента, но это то, что происходит одновременно."
        text="Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не сердитесь на боль в укор, в наслаждении он хочет быть перышком от боли и убежать."
        src="/assets/images/group-of-hands.png"
        alt="Наша креативная команда"
        shape="/assets/images/shapes.png"
      />
    );

    expect(screen.getByText('Наша креативная команда')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Для клиента очень важно следовать обучению клиента, но это то, что происходит одновременно.'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Важно заботиться о пациенте, чтобы больной следовал за ним, но это произойдет в такое время, когда будет много работы и боли. Ибо, говоря в мельчайших подробностях, никто не должен заниматься какой-либо работой, если он не извлечет из нее какой-либо пользы. Не сердитесь на боль в укор, в наслаждении он хочет быть перышком от боли и убежать.'
      )
    ).toBeInTheDocument();
  });
});
