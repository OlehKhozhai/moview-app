import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DROPDOWN_OPTIONS } from 'config';

const useSearchParams = (): string => {
  const [params, setParams] = useState('');

  const {
    replace: historyReplace,
    location: { search: searchQuery },
  } = useHistory();

  useEffect(() => {
    const searchParams = new URLSearchParams(searchQuery);
    const activeTab = searchParams.get('search');
    const sortBy = searchParams.get('sortBy');

    if (!activeTab) {
      searchParams.set('searchBy', 'genres');
      searchParams.set('search', '');
    }

    if (!sortBy) {
      searchParams.set('sortBy', DROPDOWN_OPTIONS[0]);
    }

    historyReplace({ search: searchParams.toString() });
    setParams(searchParams.toString());
  }, [searchQuery, historyReplace]);

  return params;
};

export default useSearchParams;
