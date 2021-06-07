import React from "react";

class ClientForm extends React.Component {
  // state = {
  //   document: "379696"
  // }
  // state = {}
  // handleChange = (e) => {
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // })
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  handleClick = (e) => {
    console.log("Button was click");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was subtmit");
  //   console.log(this.state);
  // };

  render() {
    return (
      <React.Fragment>
        <h1>New Client</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstname"
              value={this.props.formValues.firstname}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastname"
              value={this.props.formValues.lastname}
            />
          </div>
          <div className="form-group">
            <label>Document</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="ci"
              value={this.props.formValues.ci}
            />
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="birthday"
              value={this.props.formValues.birthday}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ClientForm;
