import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  title: string;
  linkTo?: string;
  type?: 'primary' | 'primaryOutline' | 'secondary';
  children?: ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = 'primary',
  linkTo,
  children,
  className,
}) => {
  return linkTo ? (
    <Link to={linkTo} className={cn(styles.root, styles[type], className)}>
      {title || children}
    </Link>
  ) : (
    <button className={cn(styles.root, styles[type], className)}>{title || children}</button>
  );
};

export default React.memo(Button);
