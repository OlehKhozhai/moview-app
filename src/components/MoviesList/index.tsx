import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import MoviesListItem from 'components/MoviesListItem';
import { movies } from 'config';
import { commonSelector } from 'redux/_common/selectors';
import styles from './styles.module.scss';

type MoviesListProps = {
  className?: string;
};

const MoviesList: React.FC<MoviesListProps> = ({ className }) => {
  const { activeTab } = useSelector(commonSelector);

  const filteredMovies = movies.filter(({ genre }) => genre === activeTab || activeTab === 'all');

  return (
    <div className={cn(styles.root, className)}>
      {filteredMovies.length > 0 && (
        <>
          <h3 className={styles.counter}>{filteredMovies.length} movies found</h3>

          {filteredMovies.map((movie) => {
            return <MoviesListItem key={movie.id} {...movie} />;
          })}
        </>
      )}

      {filteredMovies.length === 0 && <h2 className={styles.noMovieFound}>No movies found</h2>}
    </div>
  );
};

export default React.memo(MoviesList);
