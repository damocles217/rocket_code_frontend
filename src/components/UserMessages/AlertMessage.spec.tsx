import { act, render, screen } from '@testing-library/react';
import React from 'react';
import AlertMessage from './AlertMessage';

beforeEach(() => {
  act(() => {
    render(<AlertMessage />);
  });
});

describe('AlertMessage Component', () => {
  it('Must render the Alert Message component', async () => {
    expect(
      screen.getByText(/Si tus datos son correctos por favor envialos/i),
    ).toBeInTheDocument();
  });
});
