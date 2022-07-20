import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Container } from '@layouts/';
import { IProduct } from '@base/types';
import { Loader } from '@components/';

import products from '@base/seeders/products';
import classNamesLib from 'classnames';
import { useCartContext } from '@base/Store';

export const ProductItemPage = () => {
  const { itemAlias } = useParams();
  const navigate = useNavigate();
  const { setItems } = useCartContext();

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loadingAddCart, setLoadingAddCart] = useState(false);
  const [successAddCart, setSuccessAddCart] = useState(false);

  useEffect(() => {
    const existItem = products.find((item) => item.alias === itemAlias);
    if (!existItem) {
      navigate('/404');
    } else {
      setProduct(existItem);
    }
  }, []);

  const handeClick = () => {
    if (!product) {
      return;
    }

    setLoadingAddCart(true);

    setTimeout(() => {
      setSuccessAddCart(true);
      setLoadingAddCart(false);
    }, 500);

    setItems((prevState) => {
      const presStateCp = [...prevState];
      const exProductIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id
      );

      if (exProductIndex === -1) {
        return [...presStateCp, { product, count: 1 }];
      }

      const count = prevState[exProductIndex].count + 1;
      presStateCp[exProductIndex] = { ...prevState[exProductIndex], count };

      return presStateCp;
    });
  };

  const buttonClasses = classNamesLib('ui-button isPrimary', {
    isLoading: loadingAddCart,
  });

  return (
    <Container>
      {!product ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={product.img}
            alt={product.title}
            style={{ maxWidth: '420px' }}
          />
          <h1 className="ui-title mb-4">{product.title}</h1>
          <span>{product.price}</span>

          <div className="flex mt-4">
            <Link className="ui-button isLink" to="/">
              Back to home
            </Link>
            <button
              type="button"
              className={buttonClasses}
              onClick={() => !loadingAddCart && handeClick()}
              disabled={loadingAddCart}
            >
              {loadingAddCart ? 'Loading...' : 'Add to cart'}
            </button>
          </div>
          {successAddCart && (
            <p className="ui-text isSuccess mt-2">Success item add!</p>
          )}
        </div>
      )}
    </Container>
  );
};
