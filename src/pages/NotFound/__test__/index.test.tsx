import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import NotFound from '../index';

describe('NotFound component', () => {
  test('should render markup by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <NotFound />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
