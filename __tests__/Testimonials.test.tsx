import React from 'react';

import Testimonials from '@/components/Testimonials';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Testimonials', () => {
  it('renders a Testimonials in english and displays the first testimonial', () => {
    render(<Testimonials lng="en" />);

    expect(screen.getByText('Testimonials')).toBeInTheDocument();
    expect(screen.getByText('What people say about our blog')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByAltText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('Paris, France')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId('backButton')).toHaveClass('disabled');
    expect(screen.getByTestId('nextButton')).not.toHaveClass('disabled');
  });

  it('renders a Testimonials in russian and displays the first testimonial', () => {
    render(<Testimonials lng="ru" />);

    expect(screen.getByText('Отзывы')).toBeInTheDocument();
    expect(screen.getByText('Что говорят люди о нашем блоге')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Для заказчика очень важно следить за процессом коучинга, но на этот раз я дам ему это.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByAltText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('Paris, France')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId('backButton')).toHaveClass('disabled');
    expect(screen.getByTestId('nextButton')).not.toHaveClass('disabled');
  });

  it('renders a Testimonials in english and displays the second testimonial', () => {
    render(<Testimonials lng="en" />);

    const nextButton = screen.getByTestId('nextButton');
    fireEvent.click(nextButton);

    expect(screen.getByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.getByAltText('Dianne Russell')).toBeInTheDocument();
    expect(screen.getByText('Mallorca, Spain')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId('backButton')).not.toHaveClass('disabled');
    expect(screen.getByTestId('nextButton')).not.toHaveClass('disabled');
  });

  it('renders a Testimonials in english and displays the third testimonial', () => {
    render(<Testimonials lng="en" />);

    const nextButton = screen.getByTestId('nextButton');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByText('Jenny Wilson')).toBeInTheDocument();
    expect(screen.getByAltText('Jenny Wilson')).toBeInTheDocument();
    expect(screen.getByText('Minsk, Belarus')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId('backButton')).not.toHaveClass('disabled');
    expect(screen.getByTestId('nextButton')).not.toHaveClass('disabled');
  });

  it('renders a Testimonials in english and displays the last testimonial', () => {
    render(<Testimonials lng="en" />);

    const nextButton = screen.getByTestId('nextButton');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByText('Jacob Jones')).toBeInTheDocument();
    expect(screen.getByAltText('Jacob Jones')).toBeInTheDocument();
    expect(screen.getByText('New York, USA')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();

    expect(screen.getByTestId('backButton')).not.toHaveClass('disabled');
    expect(screen.getByTestId('nextButton')).toHaveClass('disabled');
  });
});
