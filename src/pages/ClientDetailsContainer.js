import React from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import ClientDetails from "./ClientDetails";

class ClientDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const uri = `http://localhost:9000/api/clients/${this.props.match.params.clientId}`;
      const response = await fetch(uri);
      const data = await response.json();
      this.setState({ loading: false, data: data[0] });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false });
  };

  handleDeleteClient = async (e) => {
    this.setState({ loading: true, error: null });
    const requestOptions = {
      method: "DELETE",
    };

    try {
      const uri = `http://localhost:9000/api/clients/${this.props.match.params.clientId}`;
      await fetch(uri, requestOptions);
      this.setState({ loading: false });
      this.props.history.push("/clients");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <ClientDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteClient={this.handleDeleteClient}
        cls={this.state.data}
      />
    );
  }
}

export default ClientDetailsContainer;
