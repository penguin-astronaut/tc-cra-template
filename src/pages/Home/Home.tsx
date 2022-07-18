import React from 'react';

import { Container } from '@layouts/';

import products from '@base/seeders/products';
import { Link } from 'react-router-dom';

export const Home = () => (
  <Container>
    <div className="flex flex-wrap mt-4">
      {products.map((item) => (
        <div className="ui-card isAnimated mr-4 mb-4" key={item.id}>
          <div className="ui-card-body">
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: '420px' }}
            />
            <div className="flex flex-col items-center">
              <span className="ui-title-3">{item.title}</span>
              <span>{item.price}</span>
              <Link to={`/products/${item.alias}`}>
                <button type="button" className="ui-button isPrimary">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
);
