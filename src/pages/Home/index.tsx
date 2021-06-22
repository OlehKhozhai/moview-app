import React from 'react';

import Footer from 'components/Footer';
import HomeBanner from 'components/HomeBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Divider />
      <MoviesNavbar />
      <MoviesList />
      <Footer />
    </>
  );
};

export default React.memo(Home);
