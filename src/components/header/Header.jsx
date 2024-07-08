import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <header className="header">
      <div className="logo">
        <span>by</span><span>trend</span>
      </div>
      <nav className="navigation">
        <a href="#services">{t('services')}</a>
        <a href="#about">{t('about')}</a>
        <a href="#contacts">{t('contacts')}</a>
        <NavLink to="/register" className="login-button">{t('log_in')}</NavLink>
        <NavLink to="/purchase" className="open-account-button">{t('open_account')}</NavLink>
        <select className="language-selector" value={language} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">UZ</option>
        </select>
      </nav>
    </header>
  );
}

export default Header;
