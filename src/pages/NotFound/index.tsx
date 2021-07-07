import React from 'react';

import styles from './styles.module.scss';

const NotFound = () => {
  return <h2 className={styles.root}>Page not found</h2>;
};

export default React.memo(NotFound);
