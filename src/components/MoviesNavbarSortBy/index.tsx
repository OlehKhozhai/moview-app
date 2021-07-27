import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import Dropdown from 'components/_common/Dropdown';
import { DROPDOWN_OPTIONS } from 'config';
import useOpenAndClose from 'hooks/useOpenAndClose';
import styles from './styles.module.scss';

type MoviesNavbarSortByProps = {
  searchParams: string;
  className?: string;
};

const MoviesNavbarSortBy: React.FC<MoviesNavbarSortByProps> = ({ searchParams, className }) => {
  const { replace: historyReplace } = useHistory();
  const { isOpen, onToggle, onClose } = useOpenAndClose();

  const newSearchParams = React.useMemo(() => new URLSearchParams(searchParams), [searchParams]);
  const sortBy = newSearchParams.get('sortBy') || '';

  const handleOptionClick = React.useCallback(
    (option: string) => {
      newSearchParams.set('sortBy', option);
      historyReplace({ search: newSearchParams.toString() });
      onClose();
    },
    [newSearchParams, onClose, historyReplace]
  );

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>Sort By</span>

      <Dropdown
        options={DROPDOWN_OPTIONS}
        value={sortBy}
        isOpen={isOpen}
        onToggle={onToggle}
        onClose={onClose}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default React.memo(MoviesNavbarSortBy);
