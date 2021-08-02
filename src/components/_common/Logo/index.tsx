import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

type LogoProps = { className?: string };

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link className={cn(styles.root, className)} to="/">
      <span className={styles.bold}>netflix</span>roulete
    </Link>
  );
};

export default React.memo(Logo);
