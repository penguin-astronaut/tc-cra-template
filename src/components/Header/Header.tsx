import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { Container } from '@layouts/';
import { Logo } from '@icons/Logo';

import { app } from '@base/_config';

import './Header.scss';

const menuLinks = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About',
    alias: '/about',
  },
];

const menuItem = menuLinks.map((item) => (
  <li key={item.alias}>
    <NavLink to={item.alias}>
      <div className="ui-button isLink">{item.title}</div>
    </NavLink>
  </li>
));

const menuList = <ul className="HeaderList">{menuItem}</ul>;

type HeaderProps = {
  isLogo?: boolean;
  isFixed?: boolean;
  className?: string;
} & HTMLProps<HTMLDivElement>;

export const Header: React.FC<HeaderProps> = ({
  isLogo,
  isFixed,
  className,
  ...attrs
}) => {
  const classes = classNames('Header', className, {
    isFixed,
  });

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className="flex justify-between py-2 mb-4">
          <div className="Logo">
            {isLogo && <Logo />}
            <span>{app.name}</span>
          </div>
          {menuList}
        </div>
      </Container>
    </header>
  );
};
