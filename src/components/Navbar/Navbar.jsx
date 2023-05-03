import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <h2>Math Magicians</h2>
      </div>
      <ul className="links-container">
        {[{
          id: 1,
          path: '/',
          text: 'Home',
        },
        {
          id: 2,
          path: '/calculator',
          text: 'Calculator',
        },
        {
          id: 3,
          path: '/quotes',
          text: 'Quotes',
        },
        ].map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
