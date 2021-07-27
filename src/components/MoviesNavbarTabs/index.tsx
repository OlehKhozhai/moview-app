import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import MoviesNavbarTabItem from 'components/MoviesNavbarTabItem';
import { TABS } from 'config';
import styles from './styles.module.scss';

type MoviesNavbarTabsProps = {
  searchParams: string;
  className?: string;
};

const MoviesNavbarTabs: React.FC<MoviesNavbarTabsProps> = ({ searchParams, className }) => {
  const { replace: historyReplace } = useHistory();
  const activeTab = new URLSearchParams(searchParams).get('search');

  const handleTabClick = React.useCallback(
    (tab) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('search', tab === 'all' ? '' : tab);
      historyReplace({ search: newSearchParams.toString() });
    },
    [historyReplace, searchParams]
  );

  return (
    <ul className={cn(styles.root, className)}>
      {TABS.map((tab) => {
        return (
          <MoviesNavbarTabItem
            key={tab}
            title={tab}
            isActive={activeTab === tab || (activeTab === '' && tab === 'all')}
            onTabClick={handleTabClick}
          />
        );
      })}
    </ul>
  );
};

export default React.memo(MoviesNavbarTabs);
