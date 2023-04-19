// import the original type declarations
// import all namespaces (for the default language, only)
import 'i18next';
import { translation } from 'utils/translations/translations/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translation;
    };
  }
}
