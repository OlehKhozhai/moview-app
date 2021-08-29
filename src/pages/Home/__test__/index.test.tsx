import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import Home from '../index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({ movies: [], isMoviesLoading: false }),
}));

jest.mock('components/Footer/', () => ({
  __esModule: true,
  default: () => '---Footer---',
}));
jest.mock('components/HomeBanner/', () => ({
  __esModule: true,
  default: () => '---HomeBanner---',
}));
jest.mock('components/_common/Divider', () => ({
  __esModule: true,
  default: () => '---Divider---',
}));
jest.mock('components/MoviesNavbar/', () => ({
  __esModule: true,
  default: () => '---MoviesNavbar---',
}));
jest.mock('components/MoviesList/', () => ({
  __esModule: true,
  default: () => '---MoviesList---',
}));

describe('Home component', () => {
  test('should render Home component by default on home page', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <Home />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
