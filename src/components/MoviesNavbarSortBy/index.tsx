import React from 'react';
import cn from 'classnames';

import Dropdown from 'components/_common/Dropdown';
import styles from './styles.module.scss';

type MoviesNavbarSortByProps = {
  className?: string;
};

const MoviesNavbarSortBy: React.FC<MoviesNavbarSortByProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>Sort By</span>
      <Dropdown />
    </div>
  );
};

export default React.memo(MoviesNavbarSortBy);
