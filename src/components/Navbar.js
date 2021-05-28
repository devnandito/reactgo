import React from 'react';

import './styles/Navbar.css'
import logo from '../images/logo.svg'

class ClientNew extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar_brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Tracking</span>
            <span className="font-weight-bold">System</span>
          </a>
        </div>
      </div>
    )
  }
}

export default ClientNew;