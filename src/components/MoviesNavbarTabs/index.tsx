import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import MoviesNavbarTabItem from 'components/MoviesNavbarTabItem';
import { TABS } from 'config';
import { setActiveTabAction } from 'redux/actions';
import { activeTabSelector } from 'redux/selectors';
import styles from './styles.module.scss';

type MoviesNavbarTabsProps = {
  className?: string;
};

const MoviesNavbarTabs: React.FC<MoviesNavbarTabsProps> = ({ className }) => {
  const activeTab = useSelector(activeTabSelector);
  const dispatch = useDispatch();

  const handleTabClick = React.useCallback(
    (tab) => {
      dispatch(setActiveTabAction(tab));
    },
    [dispatch]
  );

  return (
    <ul className={cn(styles.root, className)}>
      {TABS.map((tab) => {
        return (
          <MoviesNavbarTabItem
            key={tab}
            title={tab}
            isActive={activeTab === tab}
            onTabClick={handleTabClick}
          />
        );
      })}
    </ul>
  );
};

export default React.memo(MoviesNavbarTabs);
