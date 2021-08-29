import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './styles.module.scss';

export enum ButtonVariation {
  Primary = 'primary',
  PrimaryOutline = 'primaryOutline',
  Secondary = 'secondary',
}

export type ButtonProps = {
  title?: string | React.ReactNode;
  type?: 'button' | 'submit';
  linkTo?: string;
  variation?: `${ButtonVariation}`;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

// PATTERN: {Component, Props, Destructuring props, defaultProps, Proxy component, Style component}
const Button: React.FC<ButtonProps> = ({
  title,
  type = 'button',
  variation = ButtonVariation.Primary,
  linkTo,
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return linkTo ? (
    // PATTERN: {Element}
    <Link to={linkTo} className={cn(styles.root, styles[variation], className)}>
      {title || children}
    </Link>
  ) : (
    <button
      className={cn(styles.root, styles[variation], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {/* PATTERN: {Expressions} */}
      {title || children}
    </button>
  );
};

export default React.memo(Button);
