import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type MoviesListItemProps = {
  image: string;
  title: string;
  genre: string;
  year: string;
  className?: string;
};

const MoviesListItem: React.FC<MoviesListItemProps> = ({
  image,
  title,
  genre,
  year,
  className,
}) => {
  return (
    <li className={cn(styles.root, className)}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.titleAndImageWrapper}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.year}>{year}</span>
      </div>
      <h5 className={styles.genre}>{genre}</h5>
    </li>
  );
};

export default React.memo(MoviesListItem);
