import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from '@layouts/';

export const NotFound = () => (
  <Container>
    <h1 className="ui-title-1 mb-4">404 - Not found</h1>
    <p>
      Page not found. Visit{' '}
      <Link className="ui-link" to="/">
        Home page
      </Link>
      .
    </p>
  </Container>
);
