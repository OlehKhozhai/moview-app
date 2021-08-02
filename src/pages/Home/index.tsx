import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from 'components/Footer';
import HomeBanner from 'components/HomeBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';
import { moviesSelector } from 'redux/selectors';
import { getMoviesAction } from 'redux/actions';
import useSearchParams from 'hooks/useSearchParams';

const Home = () => {
  const { movies, isMoviesLoading } = useSelector(moviesSelector);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (searchParams) {
      dispatch(getMoviesAction({ params: searchParams }));
    }
  }, [searchParams, dispatch]);

  return (
    <>
      <HomeBanner />
      <Divider />
      <MoviesNavbar searchParams={searchParams} />
      <MoviesList movies={movies} isLoading={isMoviesLoading} />
      <Footer />
    </>
  );
};

export default React.memo(Home);
