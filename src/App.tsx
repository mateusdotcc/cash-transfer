import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import Routes from './routes/';

import light from './styles/themes/theme-light';

import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  const [theme] = usePersistedState<DefaultTheme>('theme', light);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
