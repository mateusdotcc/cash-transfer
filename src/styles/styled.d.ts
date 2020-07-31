import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
      tertiary: string;
      onTertiary: string;
      quaternary: string;
      onQuaternary: string;
      quinary: string;
      onQuinary: string;
      senary: string;
      onSenary: string;
      seventh: string;
      onSeventh: string;
      background: string;
    };

    typography: {
      primaryRegular: string;
      primaryBold: string;
      primarySemibold: string;
      primaryMedium: string;
    };

    breakpoints: {
      mobileS: string;
      mobile: string;
      tablet: string;
      tabletL: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
