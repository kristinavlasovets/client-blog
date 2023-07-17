import React from 'react';

import MisionVision from '@/components/MisionVision';
import { MisionVisionProps } from '@/components/MisionVision/types';
import { render, screen } from '@testing-library/react';

const propsInEnglish: MisionVisionProps = {
  lng: 'en',
  variant: 'vision',
};

const propsAlternateVariant: MisionVisionProps = {
  lng: 'en',
  variant: '',
};

const propsInRussian: MisionVisionProps = {
  lng: 'ru',
  variant: 'vision',
};

describe('MisionVision', () => {
  it('renders a MisionVision in english via vision variant', () => {
    render(<MisionVision {...propsInEnglish} />);

    expect(screen.getByText('Our mision')).toBeInTheDocument();
    expect(
      screen.getByText('Creating valuable content for creatives all around the world')
    ).toBeInTheDocument();
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    expect(screen.getByText('A platform that empowers individuals to improve')).toBeInTheDocument();
  });

  it('renders a MisionVision in russian via vision variant', () => {
    render(<MisionVision {...propsInRussian} />);

    expect(screen.getByText('Наша миссия')).toBeInTheDocument();
    expect(
      screen.getByText('Создание ценного контента для творческих людей по всему миру')
    ).toBeInTheDocument();
    expect(screen.getByText('Наш взгляд')).toBeInTheDocument();
    expect(
      screen.getByText('Платформа, которая позволяет людям совершенствоваться')
    ).toBeInTheDocument();
  });

  it('renders a MisionVision in english via alternate variant', () => {
    render(<MisionVision {...propsAlternateVariant} />);

    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Read More >')).toBeInTheDocument();
    expect(
      screen.getByText('We are a community of content writers who share their learnings')
    ).toBeInTheDocument();
  });
});
