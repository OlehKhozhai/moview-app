import React, { memo, FC, Component, PureComponent, createElement } from 'react';

import styles from './styles.module.scss';

function FunctionComponentExample() {
  return <h2>Function Component Example</h2>;
}

class ClassComponentExample extends Component {
  render() {
    return <h2>Class Component Example</h2>;
  }
}

class PureComponentExample extends PureComponent {
  render() {
    return <h2>Pure Component Example</h2>;
  }
}

const CreateElementExample = () => {
  return createElement('h2', null, 'Create Element Example');
};

const App: FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Welcome to movies app!!!</h1>

      <FunctionComponentExample />
      <ClassComponentExample />
      <PureComponentExample />
      <CreateElementExample />
    </div>
  );
};

export default memo(App);
