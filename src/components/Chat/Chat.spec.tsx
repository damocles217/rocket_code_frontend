import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Chat from './Chat';

jest.mock(
  '../../assets/images/profile.jpeg',
  jest.fn(() => {
    return {
      default: jest.fn(() => 'some.jpeg'),
    };
  }),
);

beforeEach(() => {
  act(() => {
    render(<Chat />);
  });
});

describe('Chat Component', () => {
  it('Must render the chat component', () => {
    const main = screen.getByTestId('main');
    expect(main).toBeInTheDocument();
  });

  it('Must render the Name component', () => {
    const nameForm = screen.getByTestId('name-form');
    const inputName: HTMLInputElement = screen.getByTestId('name');
    const inputLastname: HTMLInputElement = screen.getByTestId('lastname');
    screen.getByTestId('secondLastname');

    fireEvent.change(inputName, { target: { value: 'Juan' } });
    fireEvent.change(inputLastname, { target: { value: 'Perez' } });

    expect(inputName.value).toBe('Juan');
    expect(inputLastname.value).toBe('Perez');
    expect(nameForm.children).toHaveLength(2);
  });
});
