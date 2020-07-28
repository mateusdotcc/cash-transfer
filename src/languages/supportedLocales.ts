const defaultLocale = "en-US";

const supportedLocales = {
  "en-US": {
    common: require("./locales/en-US/common.json"),
    dashboard: require("./locales/en-US/dashboard.json"),
  },
  "pt-BR": {
    common: require("./locales/pt-BR/common.json"),
    dashboard: require("./locales/pt-BR/dashboard.json"),
  },
};

export { defaultLocale, supportedLocales };
