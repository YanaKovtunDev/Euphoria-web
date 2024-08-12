import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en";
import ua from "@/locales/ua";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ua: {
      translation: ua,
    },
  },
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
