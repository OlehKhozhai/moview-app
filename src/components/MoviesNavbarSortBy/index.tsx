import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import Dropdown from 'components/_common/Dropdown';
import useDropdown from 'hooks/useDropdown';
import { DROPDOWN_OPTIONS, DROPDOWN_OPTIONS_DEFINITION } from 'config';
import { setActiveSortByAction } from 'redux/actions';
import styles from './styles.module.scss';

type MoviesNavbarSortByProps = {
  className?: string;
};

const MoviesNavbarSortBy: React.FC<MoviesNavbarSortByProps> = ({ className }) => {
  const dispatch = useDispatch();
  const { value, isDropdownVisible, onOptionClick, onToggleDropdownVisibility, onCloseDropdown } =
    useDropdown({
      defaultValue: DROPDOWN_OPTIONS[0],
    });

  React.useEffect(() => {
    dispatch(setActiveSortByAction(value as keyof typeof DROPDOWN_OPTIONS_DEFINITION));
  }, [value, dispatch]);

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>Sort By</span>

      <Dropdown
        options={DROPDOWN_OPTIONS}
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
