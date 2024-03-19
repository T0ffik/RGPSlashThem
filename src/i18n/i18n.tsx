import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: {
        Campains: 'Campains',
        Profile: 'Profile',
      },
    },
    pl: {
      translation: {
        Campains: 'Kampanie',
        Profile: 'Profil',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
