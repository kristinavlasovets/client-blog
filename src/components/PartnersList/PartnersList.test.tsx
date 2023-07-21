import React from 'react';

import PartnersList from '@/components/PartnersList';
import { render, screen } from '@testing-library/react';

describe('PartnersList', () => {
  it('renders a PartnersList in english ', () => {
    render(<PartnersList lng="en" />);

    expect(screen.getByText('We are')).toBeInTheDocument();
    expect(screen.getByText('Featured in')).toBeInTheDocument();
    expect(screen.getByAltText('partner1')).toBeInTheDocument();
    expect(screen.getByAltText('partner2')).toBeInTheDocument();
    expect(screen.getByAltText('partner3')).toBeInTheDocument();
    expect(screen.getByAltText('partner4')).toBeInTheDocument();
    expect(screen.getByAltText('partner5')).toBeInTheDocument();
  });

  it('renders a PartnersList in russian ', () => {
    render(<PartnersList lng="ru" />);

    expect(screen.getByText('Мы')).toBeInTheDocument();
    expect(screen.getByText('Представлены в')).toBeInTheDocument();
    expect(screen.getByAltText('partner1')).toBeInTheDocument();
    expect(screen.getByAltText('partner2')).toBeInTheDocument();
    expect(screen.getByAltText('partner3')).toBeInTheDocument();
    expect(screen.getByAltText('partner4')).toBeInTheDocument();
    expect(screen.getByAltText('partner5')).toBeInTheDocument();
  });
});
