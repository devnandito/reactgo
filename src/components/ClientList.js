import React from "react";
import { Link } from "react-router-dom";

import "./styles/ClientList.css";

function useSearchClients(clients) {
  const [query, setQuery] = React.useState('');
  const [filteredClients, setFilteredClients] = React.useState(clients)

  React.useMemo(() => {
    const result = clients.filter(client => {
      return `${client.firstname} ${client.lastname}`.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredClients(result)
  }, [clients, query])

  return { query, setQuery, filteredClients }
}

function ClientList(props) {
  const clients = props.clients
  const { query, setQuery, filteredClients } = useSearchClients(clients)

  if (filteredClients.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Clients</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
          />
        </div>
        <h3>No clients were found</h3>
        <Link className="btn btn-primary" to="/clients/new">
          Create new client
          </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Clients</label>
        <input type="text" className="form-control"
          value={query}
          onChange={(e) => { setQuery(e.target.value) }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredClients.map((client) => {
          return (
            <div key={client.ID} className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src="https://www.gravatar.com/avatar?d=identicon"
                alt="Avatar"
              />
              <li>
                <Link className="text-reset text-decoration-none" to={`/clients/${client.ID}`}>
                  {client.firstname} {client.lastname}
                </Link>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientList;
