import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      services: "Services",
      about: "About",
      contacts: "Contacts",
      log_in: "Log in",
      open_account: "Open an account",
      first_name: "First name",
      last_name: "Last name",
      birth_date: "Birth date",
      gender: "Gender",
      female: "Female",
      male: "Male",
      skype: "Skype",
      promo: "Promo",
      continue: "Continue"
    }
  },
  ru: {
    translation: {
      services: "Сервисы",
      about: "О нас",
      contacts: "Контакты",
      log_in: "Войти",
      open_account: "Открыть счет",
      first_name: "Имя",
      last_name: "Фамилия",
      birth_date: "Дата рождения",
      gender: "Пол",
      female: "Женский",
      male: "Мужской",
      skype: "Скайп",
      promo: "Промо",
      continue: "Продолжить"
    }
  },
  uz: {
    translation: {
      services: "Xizmatlar",
      about: "Biz haqimizda",
      contacts: "Kontaktlar",
      log_in: "Kirish",
      open_account: "Hisob ochish",
      first_name: "Ism",
      last_name: "Familiya",
      birth_date: "Tug'ilgan sana",
      gender: "Jinsi",
      female: "Ayol",
      male: "Erkak",
      skype: "Skype",
      promo: "Promo",
      continue: "Davom etish"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
