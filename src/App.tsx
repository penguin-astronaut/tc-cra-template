import React from 'react';
import { Routes, Route } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import '@assets/scss/main.scss';

import { Header, Footer } from '@components/';
import { Home, About, NotFound } from '@pages/';
import { Container } from '@layouts/';

const App = () => (
  <div className="ui-wrapper">
    <Header isLogo />
    <div className="ui-content-wrapper">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
    <Footer />
  </div>
);

export default App;
