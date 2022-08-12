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

describe('Contact Component', () => {
  it('Must render the contact component', async () => {
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

    const inputDay = await screen.findByTestId('day');
    const inputMounth = await screen.findByTestId('mounth');
    const inputYear = await screen.findByTestId('year');

    fireEvent.change(inputDay, { target: { value: '12' } });
    fireEvent.change(inputMounth, { target: { value: 'agosto' } });
    fireEvent.change(inputYear, { target: { value: '2002' } });

    fireEvent.keyDown(inputYear, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    const contactElement = await screen.findByTestId('contact-form');

    expect(contactElement).toBeInTheDocument();
    expect(contactElement.children).toHaveLength(2);
  });
});
