import React from 'react';
import { useSelector } from 'react-redux';

import Footer from 'components/Footer';
import HomeBanner from 'components/HomeBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';
import { moviesSelector } from 'redux/selectors';

const Home = () => {
  const { movies, isMoviesLoading } = useSelector(moviesSelector);

  return (
    <>
      <HomeBanner />
      <Divider />
      <MoviesNavbar />
      <MoviesList movies={movies} isLoading={isMoviesLoading} />
      <Footer />
    </>
  );
};

export default React.memo(Home);
