// src/pages/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar';
import './NavBar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className="NavBar">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}