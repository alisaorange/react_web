import React from 'react';
import { useTranslation } from 'react-i18next';
import {Button} from "src/shared/ui/button/Button";

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
      <Button label={i18n.language === 'en' ? 'RU' : 'EN'} onClick={toggleLanguage} />
  );
};

export default LanguageToggle;
