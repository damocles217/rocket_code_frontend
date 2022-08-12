import { act, render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

jest.mock('../../assets/SVG/stopwatch.svg', () => {
  return {
    default: 'whatever.svg',
  };
});
jest.mock('../../assets/SVG/clipboard.svg', () => {
  return {
    default: 'whatever.svg',
  };
});

beforeEach(() => {
  act(() => {
    render(<Header />);
  });
});

describe('Header Component', () => {
  it('Must render the Header', () => {
    const header = screen.getByTestId('header');
    expect(header.children).toHaveLength(2);
  });

  it('Must get the title', () => {
    expect(screen.getByText(/Titulo de formulario/i)).toBeInTheDocument();
  });
});
