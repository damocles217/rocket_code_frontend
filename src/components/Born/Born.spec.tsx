import { act, render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
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

describe('Born Component', () => {
  it('Must render the born component', async () => {
    const inputName: HTMLInputElement = screen.getByTestId('name');
    const inputLastname: HTMLInputElement = screen.getByTestId('lastname');
    screen.getByTestId('secondLastname');

    fireEvent.change(inputName, { target: { value: 'Juan' } });
    fireEvent.change(inputLastname, { target: { value: 'Perez' } });

    fireEvent.keyDown(inputLastname, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    const bornComponent = await screen.findByTestId('born-form');

    expect(bornComponent.children).toHaveLength(2);
    expect(bornComponent).toBeInTheDocument();
  });
});
