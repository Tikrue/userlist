import React, { Component } from 'react'

class AddUser extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({ [event.currentTarget.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.props.onRowAdd(this.state)
    .then(x => {
      alert(x)
      
      this.setState({ 
        name: '',
        email: '',
        phone: '' 
      })
    })
  }
  
  render() {
    return(
      <form
        className="add_row col-md-12"  
        onSubmit={this.handleSubmit}
      >

        <input 
          className="user_input"
          placeholder="Full name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />

        <input 
          className="user_input"
          placeholder="E-mail address"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          name="email"
        />

        <input 
          className="user_input"
          placeholder="Phone number"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
 
        <input
          className="user_input btn"
          type="submit" 
          value="Add"
        />
      </form>
    )
  }
}

export default AddUser