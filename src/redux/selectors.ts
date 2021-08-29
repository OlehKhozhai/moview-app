import { AppStore } from 'redux/store';
import { Movie } from 'redux/types';

export const moviesSelector = (
  store: AppStore
): {
  movies: Movie[];
  isMoviesLoading: boolean;
} => ({
  movies: store.movies,
  isMoviesLoading: store.isMoviesLoading,
});

export const movieDetailsSelector = (store: AppStore): Movie | null => store.movieDetails;

export const errorSelector = (store: AppStore): string | string[] | null => store.error;
