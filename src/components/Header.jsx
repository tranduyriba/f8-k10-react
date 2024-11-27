import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li> 
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/cotact">Contact</Link>
        </li>
        <li>
          <Link to="/notfound">NotFound</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;