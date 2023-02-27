import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {

  return (
    <div className='header'>
      <Link to="/" className='logo'> Madilyn Orchard </Link>
      <nav>
        <Link to="/" className='nav-link'>Paintings</Link>
        <Link to="/shoes" className='nav-link'>Shoes</Link>
        <Link to="/contact" className='nav-link'>Contact</Link>
      </nav>
    </div>
  )
};