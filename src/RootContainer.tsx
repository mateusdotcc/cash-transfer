import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useSelector } from 'react-redux';
import { SettingsState } from 'store/modules/settings/types';

import Routes from './routes';

import light from './styles/themes/theme-light';
import dark from './styles/themes/theme-dark';

import GlobalStyle from './styles/globalStyle';

const RootContainer = () => {
  const { theme } = useSelector(
    (state: { settings: SettingsState }) => state.settings,
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

export default RootContainer;
