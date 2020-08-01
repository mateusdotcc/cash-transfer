import { DefaultTheme } from 'styled-components';

import breakpoints from '../breakpoints';
import easings from '../easings';

const theme: DefaultTheme = {
  title: 'dark',

  colors: {
    primary: '#f364a2',
    onPrimary: '#e8368f',
    secondary: '#ffffff',
    onSecondary: '#ffffff',
    onTertiary: '#ffffff',
    quaternary: '#333333',
    onQuaternary: '#ffffff',
    quinary: '#ffffff',
    senary: '#e4e7eb',
    onSenary: '#333333',
    seventh: '#ff8cba',
    onSeventh: '#da127d',
    background: '#121212',
  },

  typography: {
    primaryRegular: 'Inter-Regular',
    primaryBold: 'Inter-Bold',
    primarySemibold: 'Inter-Semibold',
    primaryMedium: 'Inter-Medium',
  },

  breakpoints,
  easings,
};

export default theme;
