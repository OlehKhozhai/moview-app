import React from 'react';

import Footer from 'components/Footer';
import MovieDetailsBanner from 'components/MovieDetailsBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';

const MovieDetails = () => {
  return (
    <>
      <MovieDetailsBanner />
      <Divider />
      <MoviesNavbar />
      <MoviesList />
      <Footer />
    </>
  );
};

export default React.memo(MovieDetails);
