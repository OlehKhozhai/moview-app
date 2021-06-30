import React from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import MoviesListItem from 'components/MoviesListItem';
import styles from './styles.module.scss';

const movies = [
  {
    image: 'https://via.placeholder.com/330x450',
    title: 'Movie 1',
    genre: 'documentary',
    year: '1999',
  },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 2', genre: 'comedy', year: '1999' },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 3', genre: 'comedy', year: '2000' },
  {
    image: 'https://via.placeholder.com/330x450',
    title: 'Movie 4',
    genre: 'documentary',
    year: '1999',
  },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 5', genre: 'horror', year: '1999' },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 6', genre: 'horror', year: '2020' },
  {
    image: 'https://via.placeholder.com/330x450',
    title: 'Movie 10',
    genre: 'horror',
    year: '2020',
  },
  {
    image: 'https://via.placeholder.com/330x450',
    title: 'Movie 11',
    genre: 'horror',
    year: '2020',
  },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 7', genre: 'crime', year: '1999' },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 8', genre: 'crime', year: '1999' },
  { image: 'https://via.placeholder.com/330x450', title: 'Movie 9', genre: 'crime', year: '2021' },
];

type MoviesListProps = {
  className?: string;
};

const MoviesList: React.FC<MoviesListProps> = ({ className }) => {
  const { hash } = useLocation();

  const genreFromUrl = hash.split('#')[1];
  const filteredMovies = movies.filter(({ genre }) => genre === genreFromUrl || genreFromUrl === 'all');

  return (
    <div className={cn(styles.root, className)}>
      {filteredMovies.length > 0 && (
        <>
          <h3 className={styles.counter}>{filteredMovies.length} movies found</h3>
          {filteredMovies.map((movie) => {
            return <MoviesListItem key={movie.title} {...movie} />;
          })}
        </>
      )}

      {filteredMovies.length === 0 && <h2 className={styles.noMovieFound}>No movies found</h2>}
    </div>
  );
};

export default React.memo(MoviesList);
