import React from 'react';

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
    console.log("Button was click")
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was subtmit')
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Client</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
          </div>
          <div className="form-group">
            <label>Document</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="document" value={this.props.formValues.document} />
          </div>
          <div className="form-group">
            <label>Birthday</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="birthday" value={this.props.formValues.birthday} />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default ClientForm;