import React from 'react';

import { Container } from '@layouts/';
import { Link } from 'react-router-dom';
import { useCartContext } from '@base/Store';

const productStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'var(--ui-g-100)',
  borderRadius: '16px',
};

export const Cart = () => {
  const { items, setItems } = useCartContext();

  // content
  const renderContent = items.length
    ? items.map(({ product, count }) => (
        <div
          key={product.id}
          className="flex items-center mb-8"
          style={productStyles}
        >
          <img
            src={product.img}
            alt={product.title}
            style={{ maxWidth: '140px' }}
          />
          <div className="flex flex-col items-start">
            <p className="ui-title-3 mb-2">{product.title}</p>
            <div className="flex mb-4">
              <p className="mr-5">Price: {product.price}</p>
              <p className="mr-5">Count: {count}</p>
            </div>
            <Link to={`/products/${product.alias}`}>
              <span className="ui-link isPrimary">See more</span>
            </Link>
          </div>
        </div>
      ))
    : 'Cart is empty';

  // controls
  const renderControls = (
    <div className="flex mt-4">
      <Link className="ui-button isLink" to="/">
        Back to home
      </Link>
      {items.length > 0 && (
        <button
          type="button"
          className="ui-button isPrimary"
          onClick={() => setItems([])}
        >
          Refresh the cart
        </button>
      )}
    </div>
  );

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className="ui-title-1 text-center">Checkout</h1>
        <div className="flex flex-col items-center">
          {renderContent}
          {renderControls}
        </div>
      </div>
    </Container>
  );
};
