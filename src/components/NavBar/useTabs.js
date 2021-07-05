import { useState } from 'react';

import navBarConstants from './constants';

const {
  TABS,
} = navBarConstants;

export default function useTabs() {
  const [activeTab, setActiveTab] = useState(TABS.MOST_POPULAR.value);

  const handleTabChange = (event, tab) => {
    if (tab === activeTab) {
      return;
    }

    setActiveTab(tab);
  };

  return [activeTab, handleTabChange];
}
