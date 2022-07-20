import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import '@assets/scss/main.scss';

import { Header, Footer } from '@components/';
import { Home, About, NotFound, ProductItemPage, Cart } from '@pages/';
import { Container } from '@layouts/';

const App = () => (
  <div className="ui-wrapper">
    <Header isLogo />
    <div className="ui-content-wrapper">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Navigate to="/" />} />
          <Route path="/products/:itemAlias" element={<ProductItemPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
    <Footer />
  </div>
);

export default App;
