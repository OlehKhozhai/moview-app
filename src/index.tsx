import React from 'react';
import { render } from 'react-dom';
import './index.scss';

import App from './components/App';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// ToDo: add eslint, husky, github CI/CD - if I will have enough time
