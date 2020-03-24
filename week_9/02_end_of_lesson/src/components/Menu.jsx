import React from 'react';

import { NavLink } from 'react-router-dom';

import NavigationUrls from '../routers/NavigationUrls';

const Menu = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
          to={NavigationUrls.homePageUrl}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
          to={NavigationUrls.aboutPageUrl}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
          to={NavigationUrls.blogPageUrl}
        >
          Blog
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
