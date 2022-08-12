import { act, render, screen } from '@testing-library/react';
import React from 'react';
import Chat from './Chat';

describe('Chat Component', () => {
  it('Must render the chat component', () => {
    act(() => {
      render(<Chat />);
    });

    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });
});
