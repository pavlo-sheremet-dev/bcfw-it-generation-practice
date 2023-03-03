import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

export const langs = {
  UK: 'uk',
  EN: 'en',
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: langs.EN,
  debug: true,
});

export default i18n;
