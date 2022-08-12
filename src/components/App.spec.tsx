import { act, screen, render } from '@testing-library/react';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container: HTMLElement | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App component', () => {
  it('Must render the App component', async () => {});
});
