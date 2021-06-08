import React from "react";
import { Link } from "react-router-dom";

import "./styles/ClientDetails.css"
import confLogo from "../images/platzi-conf-logo.svg"

import Client from "../components/Client"

function ClientDetails(props) {
  const cls = props.cls
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6">
              <div className="BadgeDetails__hero-attendant-name">
                <h1> {cls.firstname} {cls.lastname}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Client firstname={cls.firstname} lastname={cls.lastname} ci={cls.ci} birthday={cls.birthday} />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link className="btn btn-primary mb-4" to={`/clients/${cls.ID}/edit`}>Edit</Link>
              </div>
              <div>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientDetails