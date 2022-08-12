import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { ReceivedForm } from '../../../types/form';
import MessageWithData from './MessageWithData';

let container: HTMLElement | null;

beforeEach(() => {
  container = document.createElement('main');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container!.remove();
  container = null;
});

describe('MessageWithData Component', () => {
  it('Must render the MessageWithData component', () => {
    const messages: ReceivedForm = {
      bornDate: '11111',
      email: '123',
      id: 1,
      lastname: '1234',
      name: 'juan',
      phone: '111111111',
    };
    act(() => {
      render(<MessageWithData message={messages} />, { container });
    });
    expect(screen.getByText(/juan/gi)).toBeInTheDocument();
  });
});
