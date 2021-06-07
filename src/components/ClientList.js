import React from "react";
import { Link } from "react-router-dom";

import "./styles/ClientList.css";

class ClientList extends React.Component {
  render() {
    if (this.props.clients.length === 0) {
      return (
        <div>
          <h3>No clients were found</h3>
          <Link className="btn btn-primary" to="/clients/new">
            Create new client
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.clients.map((client) => {
            return (
              <div key={client.ID} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src="https://www.gravatar.com/avatar?d=identicon"
                  alt="Avatar"
                />
                <li>
                  <p>
                    {client.firstname} {client.lastname}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ClientList;
