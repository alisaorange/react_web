import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import {ThemeProvider} from "src/features/header/ThemeContext";
import {Layout} from "src/widgets/layout/Layout";
import i18n from '../shared/i18n';
import {NotFound} from "src/pages/notFound/NotFound";
import Profile from "src/pages/profile/ProfileScreen";


function App() {
  return (
      <I18nextProvider i18n={i18n}>
          <ThemeProvider>
              <Layout>
                  <Routes>
                      <Route path="/profile" element={<Profile />} />
                      {/*<Route path="/profile" element={<Profile />} />*/}
                      {/*<Route path="/cart" element={<Cart items={items} discount={discount} onRemove={handleRemove} />} />*/}
                      <Route path="*" element={<NotFound />} />
                  </Routes>
              </Layout>
          </ThemeProvider>
      </I18nextProvider>
  );
}

export default App;
