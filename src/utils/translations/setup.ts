import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { defaultTranslations } from './defaultTranslations';

export function setup() {
  const idiomDefault = defaultTranslations();

  i18n
    .use(initReactI18next)
    .use(detector)
    .init({
      detection: {
        caches: []
      },
      resources: idiomDefault,
      defaultNS: 'translation',
      ns: ['translation'],
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: true
      }
    });
}
