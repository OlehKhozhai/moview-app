import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Footer from 'components/Footer';
import MovieDetailsBanner from 'components/MovieDetailsBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';
import { getMovieDetailsAction } from 'redux/actions';
import { movieDetailsSelector, moviesSelector } from 'redux/selectors';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(movieDetailsSelector);
  const { movies, isMoviesLoading } = useSelector(moviesSelector);
  const params = useParams<{ id: string }>();

  React.useEffect(() => {
    if (params.id) {
      dispatch(getMovieDetailsAction(+params.id));
    }
  }, [dispatch, params]);

  return (
    <>
      {movieDetails && <MovieDetailsBanner movie={movieDetails} />}
      <Divider />
      <MoviesNavbar />
      <MoviesList movies={movies} isLoading={isMoviesLoading} />
      <Footer />
    </>
  );
};

export default React.memo(MovieDetails);
