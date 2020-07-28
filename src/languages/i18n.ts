import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLocale, supportedLocales } from './supportedLocales';

i18n.use(initReactI18next).init({
  resources: supportedLocales,
  fallbackLng: defaultLocale,
  lng: defaultLocale,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
