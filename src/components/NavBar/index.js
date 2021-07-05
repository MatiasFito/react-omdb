import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import navBarContants from './constants';
import useTabs from './useTabs';

const {
  TABS,
} = navBarContants;

const NavBar = () => {
  const [activeTab, handleTabChange] = useTabs();

  return (
    <AppBar position="static">
      <Tabs
        onChange={handleTabChange}
        value={activeTab}
        aria-label="nav tabs omdb"
      >
        <Tab
          value={TABS.MOST_POPULAR.value}
          label={TABS.MOST_POPULAR.label}
          component={Link}
          to="/"
        />
        <Tab
          value={TABS.SEARCH.value}
          label={TABS.SEARCH.label}
          component={Link}
          to="/search"
        />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
