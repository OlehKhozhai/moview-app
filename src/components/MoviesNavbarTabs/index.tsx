import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import MoviesNavbarTabItem from 'components/MoviesNavbarTabItem';
import { TABS } from 'config';
import { getSearchParam, setSearchParams } from 'helpers/common';
import styles from './styles.module.scss';

type MoviesNavbarTabsProps = {
  searchParams: string;
  className?: string;
};

const MoviesNavbarTabs: React.FC<MoviesNavbarTabsProps> = ({ searchParams, className }) => {
  const { replace: historyReplace } = useHistory();
  const activeTab = getSearchParam(searchParams, 'search');

  const handleTabClick = React.useCallback(
    (tab) => {
      const newSearchParams = setSearchParams({
        query: searchParams,
        params: [
          { key: 'search', value: tab === 'all' ? '' : tab },
          { key: 'searchBy', value: 'genres' },
        ],
      });
      historyReplace({ search: newSearchParams });
    },
    [historyReplace, searchParams]
  );

  return (
    <ul className={cn(styles.root, className)}>
      {TABS.map((tab) => {
        const allTabsIsActive = activeTab === '' && tab === 'all';

        return (
          <MoviesNavbarTabItem
            key={tab}
            title={tab}
            isActive={activeTab === tab || allTabsIsActive}
            onTabClick={handleTabClick}
          />
        );
      })}
    </ul>
  );
};

export default React.memo(MoviesNavbarTabs);
