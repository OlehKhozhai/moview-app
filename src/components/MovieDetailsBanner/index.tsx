import React from 'react';
import cn from 'classnames';

import Button from 'components/_common/Button';
import Logo from 'components/_common/Logo';
import styles from './styles.module.scss';

type MovieDetailsBannerProps = {
  className?: string;
};

const MovieDetailsBanner: React.FC<MovieDetailsBannerProps> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}>
        <Logo />
        <Button title="Search" linkTo="/" />
      </header>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src="https://via.placeholder.com/330x450" />
        </div>

        <div>
          <h2 className={styles.title}>Find your movie</h2>
          <span className={styles.reward}>reward</span>

          <div className={styles.warnRow}>
            <span className={styles.year}>year</span>
            <span>duration</span>
          </div>

          <p className={styles.description}>
            can be used to automatically catch bugs and enforce style. can be used to automatically
            catch bugs and enforce style. can be used to automatically catch bugs and enforce style.
            catch bugs and enforce style. can be used to automatically catch bugs and enforce style.
            catch bugs and enforce style. can be used to automatically catch bugs and enforce style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieDetailsBanner);
