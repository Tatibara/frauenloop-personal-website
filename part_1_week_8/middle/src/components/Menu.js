import React from "react";
import { Link } from "react-router-dom";

import NavigationUrls from "../routers/NavigationUrls";

const Menu = () => <nav>
<ul className='nav'>
  <li>
    <Link to={NavigationUrls.homePageUrl}>Home</Link>
  </li>
  <li>
    <Link to={NavigationUrls.aboutPageUrl}>About</Link>
  </li>
  <li>
    <Link to={NavigationUrls.blogPageUrl}>Blog</Link>
  </li>
</ul>
</nav>;

export default Menu;
