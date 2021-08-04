import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import Button from 'components/_common/Button';
import { setSearchParams } from 'helpers/common';
import styles from './styles.module.scss';

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const history = useHistory();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchButtonClick = React.useCallback(() => {
    if (searchValue) {
      const searchParams = setSearchParams({
        query: history.location.search,
        params: [
          { key: 'search', value: searchValue },
          { key: 'searchBy', value: 'title' },
        ],
      });
      history.replace({ search: searchParams });

      setSearchValue('');
    }
  }, [searchValue, history]);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        handleSearchButtonClick();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleSearchButtonClick]);

  return (
    <div className={cn(styles.root, className)}>
      <input
        placeholder="What do you want to watch?"
        className={styles.input}
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button
        title="Search"
        className={styles.button}
        disabled={!searchValue}
        onClick={handleSearchButtonClick}
      />
    </div>
  );
};

export default React.memo(Search);
