import React from "react";

import "./styles/ClientNew.css";
import header from "../images/platzi-conf-logo.svg";
import Client from "../components/Client";
import ClientForm from "../components/ClientForm";

class ClientNew extends React.Component {
  state = {
    form: {
      firstname: "",
      lastname: "",
      ci: "",
      birthday: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: this.state.form.firstname,
        lastname: this.state.form.lastname,
        ci: this.state.form.ci,
      }),
    };

    try {
      const uri = "http://localhost:9000/api/clients";
      const response = await fetch(uri, requestOptions);
      const data = await response.json();
      console.log(data);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Client
                firstname={this.state.form.firstname || "FIRST_NAME"}
                lastname={this.state.form.lastname || "LAST_NAME"}
                ci={this.state.form.ci || "DOCUMENT"}
                birthday={this.state.form.birthday || "BIRTHDAY"}
              />
            </div>
            <div className="col-6">
              <ClientForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientNew;
