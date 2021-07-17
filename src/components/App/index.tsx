import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from 'components/_common/ErrorBoundary';
import MainRouter from 'routing';
import { store } from 'redux/store';
import styles from './styles.module.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className={styles.root}>
            <MainRouter />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
