import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import MoviesNavbarTabItem from 'components/MoviesNavbarTabItem';
import styles from './styles.module.scss';

const tabs = ['all', 'documentary', 'comedy', 'horror', 'crime'];

type MoviesNavbarTabsProps = {
  className?: string;
};

const MoviesNavbarTabs: React.FC<MoviesNavbarTabsProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const history = useHistory();

  const handleTabClick = React.useCallback(
    (tab) => {
      history.push({ hash: `#${tab}` });
      setActiveTab(tab);
    },
    [history]
  );

  React.useEffect(() => {
    if (!history.location.hash) {
      history.push({ hash: `#${tabs[0]}` });
    } else {
      setActiveTab(history.location.hash.split('#')[1]);
    }
  }, [history]);

  return (
    <ul className={cn(styles.root, className)}>
      {tabs.map((tab) => {
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
