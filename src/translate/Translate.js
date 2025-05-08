import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import GlobalTranslate from './GlobalTranslate';

const resources = {
  ru: {
    translation: {
      ...GlobalTranslate.ru,
    },
  },
  en: {
    translation: {
      ...GlobalTranslate.en,
    },
  },
};

let language = 'ru';
const savedLanguage = window.localStorage.getItem('lang');
if (savedLanguage) {
  language = savedLanguage;
}

i18next.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'en',
});

export function translation(code) {
  return i18next.t(code);
}

export const addTranslation = (translations) => {
  for (const lang of Object.keys(translations)) {
    const langTranslations = translations[lang];
    i18next.addResources(lang, 'translation', langTranslations);
  }
};
