import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import './Header.css';

const Header = () => {

  return (
    <div className="head">
      <NavLink to='/'>
        <FaAngleLeft  className="Icon"/>
      </NavLink>
        <h3>US Technology Company</h3>
    </div>
  )
}

export default Header
