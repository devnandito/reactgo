import React from "react"

import PageLoading from "../components/PageLoading"
import PageError from "../components/PageError"

import ClientDetails from "./ClientDetails"

class ClientDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const uri = `http://localhost:9000/api/clients/${this.props.match.params.clientId}`;
      const response = await fetch(uri)
      const data = await response.json()
      this.setState({ loading: false, data: data[0] })
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <ClientDetails cls={this.state.data} />
    )
  }
}

export default ClientDetailsContainer