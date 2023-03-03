import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { uk } from './locales/uk/translation';
import { en } from './locales/en/translation';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['uk', 'en'],
    fallbackLng: 'uk',
    debug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    resources: {
      uk: { translation: uk },
      en: { translation: en },
    },
  });

export default i18n;
