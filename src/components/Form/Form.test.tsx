/* eslint-disable testing-library/no-wait-for-side-effects */
import React from 'react';

import Form from '@/components/Form';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Form', () => {
  it('shows a warning message when trying to send invalid data', async () => {
    render(<Form />);
    const send = screen.getByText('Send Message')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });
});
