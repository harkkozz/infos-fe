// import the original type declarations
// import all namespaces (for the default language, only)
import { translation } from '18nConfig/translations/en.json';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translation;
    };
  }
}
