import React from 'react';
import cn from 'classnames';

import MoviesNavbarTabs from 'components/MoviesNavbarTabs';
import MoviesNavbarSortBy from 'components/MoviesNavbarSortBy';
import styles from './styles.module.scss';

type MoviesNavbarProps = {
  searchParams: string;
  className?: string;
};

const MoviesNavbar: React.FC<MoviesNavbarProps> = ({ searchParams, className }) => {
  return (
    <nav className={cn(styles.root, className)}>
      <MoviesNavbarTabs searchParams={searchParams} />
      <MoviesNavbarSortBy searchParams={searchParams} />
    </nav>
  );
};

export default React.memo(MoviesNavbar);
