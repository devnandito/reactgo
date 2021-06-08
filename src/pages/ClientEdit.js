import React from "react";

import "./styles/ClientEdit.css";
import header from "../images/platzi-conf-logo.svg";
import Client from "../components/Client";
import ClientForm from "../components/ClientForm";
import PageLoading from "../components/PageLoading";

class ClientEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstname: "",
      lastname: "",
      ci: "",
      birthday: "",
    },
  };

  componentDidMount() {
    this.fechData()
  }

  fechData = async e => {
    this.setState({ loading: true, error: null })
    try {
      const uri = `http://localhost:9000/api/clients/${this.props.match.params.clientId}`;
      const response = await fetch(uri)
      const data = await response.json()
      // console.log(data[0])
      this.setState({ loading: false, form: data[0] })
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

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
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: this.state.form.firstname,
        lastname: this.state.form.lastname,
        ci: this.state.form.ci,
      }),
    };

    try {
      const uri = `http://localhost:9000/api/clients/${this.props.match.params.clientId}`;
      const response = await fetch(uri, requestOptions);
      const data = await response.json();
      console.log(data);
      this.setState({ loading: false });
      this.props.history.push('/clients')
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
              <h1>Edit Client</h1>
              <ClientForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClientEdit;
