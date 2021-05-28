import React from 'react'

import './styles/Clients.css'
import confLogo from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import ClientList from '../components/ClientList'

class Clients extends React.Component {
  state = {
    data: [
      {
        id: 1,
        firstName: 'Diego',
        lastName: 'Saldivar',
        document: '3796986',
        birthday: '1983/06/21',
      },
      {
        id: 2,
        firstName: 'Cecilio',
        lastName: 'Gonzalez',
        document: '3640265',
        birthday: '1983/06/21',
      },
      {
        id: 3,
        firstName: 'Armando',
        lastName: 'Gomez',
        document: '3796986',
        birthday: '1983/06/21',
      },
    ]
  }
  render() {
    return (
    <div>
      <Navbar />
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges__conf-logo" src={confLogo} alt="Conf logo" />
          </div>
        </div>
      </div>
      <div className="Badge__container">
        <div className="Badges__buttons">
            <a href="/clients/new" className="btn btn-primary">New Client</a>
        </div>
      </div>

      <div className="Badges__list">
        <div className="Badges__container">
          <ClientList clients={this.state.data} />
        </div>
      </div>

    </div>
    )
  }
}

export default Clients