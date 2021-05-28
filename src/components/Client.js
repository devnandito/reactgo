import React from 'react';

import './styles/Tracking.css';
import logoConf from '../images/badge-header.svg'

class Client extends React.Component {
  render () {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img className="Badge__avatar" src={logoConf} alt="Logo conferencia"/>
        </div>
        <div className="Badge__section-name">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            {this.props.firstname}
            <br />
            {this.props.lastname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.document}</h3>
          <div>{this.props.birthday}</div>
        </div>
        <div className="Badge__footer">
          #footer
        </div>
      </div>
    )
  }
}

export default Client;