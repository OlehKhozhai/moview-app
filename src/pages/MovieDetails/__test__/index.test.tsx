import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import MovieDetails from '../index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest
    .fn()
    .mockReturnValue({ movies: [], isMoviesLoading: false, movie: { genres: [] } }),
}));

jest.mock('components/Footer/', () => ({
  __esModule: true,
  default: () => '---Footer---',
}));
jest.mock('components/MovieDetailsBanner/', () => ({
  __esModule: true,
  default: () => '---MovieDetailsBanner---',
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

describe('MovieDetails component', () => {
  test('should render markup by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <MovieDetails />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
