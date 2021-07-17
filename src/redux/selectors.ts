import { AppStore } from 'redux/store';

export const activeTabSelector = (store: AppStore) => store.activeTab;

export const moviesSelector = (store: AppStore) => ({
  movies: store.movies,
  isMoviesLoading: store.isMoviesLoading,
});

export const movieDetailsSelector = (store: AppStore) => store.movieDetails;
