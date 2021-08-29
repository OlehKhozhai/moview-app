import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import App from '../index';

describe('App component', () => {
  test('should render App component by default on home page', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
