import React from 'react';
import cn from 'classnames';

import Dropdown from 'components/_common/Dropdown';
import useDropdown from 'hooks/useDropdown';
import styles from './styles.module.scss';

const options = ['release date', 'rating', 'best 100'];

type MoviesNavbarSortByProps = {
  className?: string;
};

const MoviesNavbarSortBy: React.FC<MoviesNavbarSortByProps> = ({ className }) => {
  const { value, isDropdownVisible, onOptionClick, onToggleDropdownVisibility, onCloseDropdown } =
    useDropdown({
      defaultValue: options[0],
    });

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>Sort By</span>

      <Dropdown
        options={options}
        value={value}
        isOpen={isDropdownVisible}
        onToggle={onToggleDropdownVisibility}
        onClose={onCloseDropdown}
        onOptionClick={onOptionClick}
      />
    </div>
  );
};

export default React.memo(MoviesNavbarSortBy);
