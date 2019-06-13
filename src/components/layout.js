import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Logo = () => (
  <Link
    style={{
      boxShadow: `none`,
      textDecoration: `none`,
      color: `inherit`,
      display: 'block',
    }}
    to="/"
  >
    <img
      src="/images/logo.svg"
      alt="Borealis digital studio blog logo"
      style={{
        maxWidth: '200px',
        margin: 'auto',
        display: 'block',
      }}
    />
  </Link>
);

function Layout(props) {
  const { location, children } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Logo />
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Logo />
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
