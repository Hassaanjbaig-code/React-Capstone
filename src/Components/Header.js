import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { FiSettings, FiMic } from 'react-icons/fi';
import './Header.css';

const Header = () => (
  <div className="head">
    <NavLink to="/">
      <BsBoxArrowInLeft className="Icon" />
    </NavLink>
    <h3><a href="https://www.indmoney.com/us-stocks/top-tech-stocks">US Technology Company</a></h3>
    <div className="H-Icone">
      <FiSettings className="Setting" />
      <FiMic />
    </div>
  </div>
);

export default Header;
