import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Provider } from 'react-redux';

import usePersistedState from './hooks/usePersistedState';

import Routes from './routes';

import store from './store';

import light from './styles/themes/theme-light';

import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
