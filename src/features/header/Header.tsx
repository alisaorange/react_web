import React, { useState } from 'react';
import './header.css';
import { useTranslation } from 'react-i18next';
import NavBar from '../navbar/NavBar';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from '../logo/Logo';
import ThemeToggle from "src/features/header/ThemeToggle";
import {Button} from "src/shared/ui/button/Button";
import {Modal} from "src/features/modal/Modal";
import LoginForm from "src/features/forms/LoginForm";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const links = [
    { label: t('home'), href: '/' },
    { label: t('profile'), href: '/profile' },
    { label: t('cart'), href: '/cart' },
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="header-item">
        <Logo />
        <NavBar links={links} />
      </div>

      <div className="header-item">
        <ThemeToggle />
        <LanguageToggle />
        <div className="items">
            <Button label={t('login')} onClick={handleOpenModal} />
        </div>
      </div>

        {isModalOpen && (
            <Modal visible={isModalOpen} onClose={handleCloseModal}>
                <LoginForm />
            </Modal>
        )}

    </header>
  );
};
