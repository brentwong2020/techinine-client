import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en-US.json';
import hk from './zh-HK.json';

const resources = {
  'en-US': {
    translation: en,
  },
  'zh-HK': {
    translation: hk
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  fallbackLng: 'en-US',
  useSuspense: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;