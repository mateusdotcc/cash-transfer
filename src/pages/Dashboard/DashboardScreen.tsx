import React, { useCallback } from 'react';

import Dashboard from './Layout/Dashboard.layout';

interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

const DashboardScreen: React.FC = () => {
  const handleClickSelectCountry = useCallback((country: Country) => {
    console.log('Select', country);
  }, []);

  return <Dashboard onClickCountry={handleClickSelectCountry} />;
};

export default DashboardScreen;
