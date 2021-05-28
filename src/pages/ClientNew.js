import React from 'react';

import './styles/ClientNew.css';
import header from '../images/badge-header.svg'
import Client from '../components/Client'
import ClientForm from '../components/ClientForm'
import Navbar from '../components/Navbar'

class ClientNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    document: '',
    birthday: '',
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div>
      <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container" >
          <div className="row">
            <div className="col-6">
              <Client firstname={this.state.form.firstName} lastname={this.state.form.lastName} document={this.state.form.document} birthday={this.state.form.birthday} />
            </div>
            <div className="col-6">
              <ClientForm onChange={this.handleChange} formValues={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClientNew;