import React, { memo } from "react";

import styles from "./styles.module.scss";

const App = () => {
  return <div className={styles.root}>App</div>;
};

export default memo(App);
