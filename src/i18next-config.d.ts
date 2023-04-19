// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import { translation } from 'utils/translations/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof translation;
    };
  }
}
