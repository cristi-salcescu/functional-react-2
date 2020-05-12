import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {
  return (
    <header>          
      <h1>A Shopping Cart</h1>
      <nav className="content">
          <Link to="/">Products</Link>
      </nav>
    </header>
  );
}

export default Header;