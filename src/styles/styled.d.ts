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
      background: string;
    };
    typography: {
      primaryRegular: string;
      primaryBold: string;
      primarySemibold: string;
      primaryMedium: string;
    };
  }
}
