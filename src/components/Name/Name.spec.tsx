import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Chat from '../Chat/Chat';

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

describe('Must render the Name component', () => {
  it('Must render the name component', () => {
    const nameForm = screen.getByTestId('name-form');
    const inputName: HTMLInputElement = screen.getByTestId('name');
    const inputLastname: HTMLInputElement = screen.getByTestId('lastname');
    const inputSecondname: HTMLInputElement = screen.getByTestId('secondName');
    const inputSecondLastname: HTMLInputElement =
      screen.getByTestId('secondLastname');

    fireEvent.change(inputName, { target: { value: 'Juan' } });
    fireEvent.change(inputSecondname, { target: { value: 'Angel' } });
    fireEvent.change(inputLastname, { target: { value: 'Perez' } });
    fireEvent.change(inputSecondLastname, { target: { value: 'Juarez' } });

    expect(inputName.value).toBe('Juan');
    expect(inputSecondname.value).toBe('Angel');
    expect(inputLastname.value).toBe('Perez');
    expect(inputSecondLastname.value).toBe('Juarez');
    expect(nameForm.children).toHaveLength(2);
  });
});
