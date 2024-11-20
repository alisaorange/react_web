import React from 'react';
import { Header } from '../../features/header/Header';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};
