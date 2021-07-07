import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'components/_common/ErrorBoundary';
import MainRouter from 'routing';
import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className={styles.root}>
          <MainRouter />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
