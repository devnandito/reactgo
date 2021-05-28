import React from 'react'

class ClientList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
            {this.props.clients.map((client) => {
              return (
              <li key={client.id}>
                <p>{client.firstName} {client.lastName}</p>
              </li>)
            })}
      </ul>
    )
  }
}

export default ClientList