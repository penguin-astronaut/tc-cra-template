import React from 'react';

import { Container } from '@layouts/';

import products from '@base/seeders/products';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => (
  <Container>
    <div className="flex flex-wrap mt-4">
      <Carousel infiniteLoop centerMode showThumbs={false}>
        {products.map((item) => (
          <div className="flex items-center justify-center" key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              style={{ maxWidth: '320px' }}
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
        ))}
      </Carousel>
    </div>
  </Container>
);
