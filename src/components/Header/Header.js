import React, { Component,Fragment } from 'react';

import { Link } from "react-router-dom";

import logo from '../../images/logo.png';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <img src={logo} alt="logo"/>
          <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
          </nav>
        </div>
      </Fragment>
    );
  }
}

export default Header;