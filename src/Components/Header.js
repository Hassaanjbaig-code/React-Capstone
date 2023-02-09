import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { FiSettings, FiMic } from 'react-icons/fi';
import './Header.css';

const Header = () => (
  <div className="head">
    <NavLink to="/">
      <FaAngleLeft className="Icon" />
    </NavLink>
    <h3><a href="https://www.indmoney.com/us-stocks/top-tech-stocks">US Technology Company</a></h3>
    <div>
      <FiSettings />
      <FiMic />
    </div>
  </div>
);

export default Header;
