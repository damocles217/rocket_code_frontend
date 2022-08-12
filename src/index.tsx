import React, { StrictMode } from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';

import './normalize.scss';
import './globals.scss';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
