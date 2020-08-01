import React from 'react';

import { Provider } from 'react-redux';
import storeConfig from './store';

import RootContainer from './RootContainer';

const App: React.FC = () => {
  return (
    <Provider store={storeConfig}>
      <RootContainer />
    </Provider>
  );
};

export default App;
