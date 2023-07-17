/* eslint-disable testing-library/no-wait-for-side-effects */
import React from 'react';

import Newsletter from '@/components/Footer/Newsletter';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Newsletter', () => {
  it('shows a warning message when trying to send invalid data', async () => {
    render(<Newsletter />);
    const send = screen.getByText('Subscribe')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });
});
