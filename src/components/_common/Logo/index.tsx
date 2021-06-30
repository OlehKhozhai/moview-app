import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type LogoProps = { className?: string };

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <span className={cn(styles.root, className)}>
      <span className={styles.bold}>netflix</span>roulete
    </span>
  );
};

export default React.memo(Logo);
