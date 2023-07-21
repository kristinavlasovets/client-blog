import React from 'react';

import Carousel from '@/components/Testimonials/Carousel';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Carousel', () => {
  it('renders a Carousel with the first testimonial', () => {
    render(<Carousel />);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.getByText('Paris, France')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Floyd Miles')).toBeInTheDocument();
  });

  it('switches a Carousel to the second testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.getByText('Mallorca, Spain')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Dianne Russell')).toBeInTheDocument();
  });

  it('switches a Carousel to the third testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Jenny Wilson')).toBeInTheDocument();
    expect(screen.getByText('Minsk, Belarus')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Jenny Wilson')).toBeInTheDocument();
  });

  it('switches a Carousel to the fourth testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText('Eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    ).toBeInTheDocument();
    expect(screen.getByText('Leslie Alexander')).toBeInTheDocument();
    expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Leslie Alexander')).toBeInTheDocument();
  });

  it('switches a Carousel to the fifth testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Guy Hawkins')).toBeInTheDocument();
    expect(screen.getByText('Berlin, Germany')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Guy Hawkins')).toBeInTheDocument();
  });

  it('switches a Carousel to the sixth testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Eleanor Pena')).toBeInTheDocument();
    expect(screen.getByText('New York, USA')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Eleanor Pena')).toBeInTheDocument();
  });

  it('switches a Carousel to the seventh testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Robert Fox')).toBeInTheDocument();
    expect(screen.getByText('Venice, Italy')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Robert Fox')).toBeInTheDocument();
  });

  it('switches a Carousel to the last testimonial', () => {
    render(<Carousel />);

    const nextButton = screen.getByAltText('next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(
      screen.getByText(
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Jacob Jones')).toBeInTheDocument();
    expect(screen.getByText('New York, USA')).toBeInTheDocument();
    expect(screen.getByAltText('back')).not.toHaveClass('disabled');
    expect(screen.getByAltText('next')).not.toHaveClass('disabled');
    expect(screen.getByAltText('Jacob Jones')).toBeInTheDocument();
  });
});
