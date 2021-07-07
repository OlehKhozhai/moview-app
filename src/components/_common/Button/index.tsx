import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit';
  linkTo?: string;
  variation?: 'primary' | 'primaryOutline' | 'secondary';
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = 'button',
  variation = 'primary',
  linkTo,
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return linkTo ? (
    <Link to={linkTo} className={cn(styles.root, styles[type], className)}>
      {title || children}
    </Link>
  ) : (
    <button
      className={cn(styles.root, styles[variation], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default React.memo(Button);
