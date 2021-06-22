import React from 'react';
import cn from 'classnames';

import Button from 'components/_common/Button';
import styles from './styles.module.scss';

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <input placeholder="What do you want to watch?" className={styles.input} />
      <Button title="Search" className={styles.button} />
    </div>
  );
};

export default React.memo(Search);
