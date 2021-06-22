import React from 'react';
import cn from 'classnames';

import Search from 'components/Search';
import Button from 'components/_common/Button';
import Logo from 'components/_common/Logo';
import styles from './styles.module.scss';

type HomeBannerProps = {
  className?: string;
};

const HomeBanner: React.FC<HomeBannerProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.header}>
        <Logo />
        <Button title="+ add movie" type="secondary" />
      </div>
      <h2 className={styles.title}>Find your movie</h2>
      <Search />
    </div>
  );
};

export default React.memo(HomeBanner);
