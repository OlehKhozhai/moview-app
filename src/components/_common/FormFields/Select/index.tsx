import React from 'react';
import { useField } from 'formik';

import ErrorMessage from 'components/_common/ErrorMessage';
import styles from './styles.module.scss';

type SelectProps = {
  label: string;
  name: string;
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: React.FC<SelectProps> = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props });

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <select className={styles.input} {...field} {...props} />
      {meta.touched && meta.error && <ErrorMessage text={meta.error} />}
    </div>
  );
};

export default React.memo(Select);
