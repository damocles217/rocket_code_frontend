import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { ReceivedForm } from '../../../types/form';
import UserMessages from './UserMessages';

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
    act(() => {
      render(<UserMessages message="hola" />, { container });
    });
    expect(screen.getByText(/hola/gi)).toBeInTheDocument();
  });
});
