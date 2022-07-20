import React from 'react';
import { ReactComponent as CartIcon } from '@assets/img/cart.svg';
import { useCartContext } from '@base/Store';

export const CartWidget = () => {
  const { items } = useCartContext();
  const sum = items.reduce((cartSum, { count }) => count + cartSum, 0);
  return (
    <div className="cart-widget">
      <CartIcon />
      {!!sum && (
        <span className="cart-widget__counter">{sum < 9 ? sum : '9+'}</span>
      )}
    </div>
  );
};
