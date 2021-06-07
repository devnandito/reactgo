import React from "react";
import { Link } from "react-router-dom";

import "./styles/Clients.css";
import confLogo from "../images/badge-header.svg";
import ClientList from "../components/ClientList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class Clients extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const uri = "http://localhost:9000/api/clients";
      const response = await fetch(uri);
      const data = await response.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/clients/new" className="btn btn-primary">
              New Client
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <ClientList clients={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Clients;

// constructor(props) {
//   super();
//   console.log("1. constructor");
//   this.state = {
//     data: undefined,
//   };
// }

// componentDidMount() {
//   console.log("3. componentDidMount");
//   this.timeoutId = setTimeout(() => {
//     this.setState({
//       data: [
//         {
//           id: 1,
//           firstName: "Diego",
//           lastName: "Saldivar",
//           document: "3796986",
//           birthday: "1983/06/21",
//         },
//         {
//           id: 2,
//           firstName: "Cecilio",
//           lastName: "Gonzalez",
//           document: "3640265",
//           birthday: "1983/06/21",
//         },
//         {
//           id: 3,
//           firstName: "Armando",
//           lastName: "Gomez",
//           document: "3796986",
//           birthday: "1983/06/21",
//         },
//       ],
//     });
//   }, 3000);
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log("5 componentDidUpdate");
//   console.log({
//     prevProps: prevProps,
//     prevState: prevState,
//   });
//   console.log({
//     props: this.props,
//     state: this.state,
//   });
// }

// componentWillUnmount() {
//   console.log("6. comonentWillUmount");
//   clearTimeout(this.timeoutId);
// }
