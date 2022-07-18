import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from '@layouts/';
import { IProduct } from '@base/types';
import { Loader } from '@components/';

import products from '@base/seeders/products';

export const ProductItemPage = () => {
  const { itemAlias } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const existItem = products.find((item) => item.alias === itemAlias);
    if (!existItem) {
      navigate('/');
    } else {
      setProduct(existItem);
    }
  }, []);

  if (!product) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col items-center">
        <img
          src={product.img}
          alt={product.title}
          style={{ maxWidth: '420px' }}
        />
        <h1 className="ui-title mb-4">{product.title}</h1>
        <span>{product.price}</span>
      </div>
    </Container>
  );
};
