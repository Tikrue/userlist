import React, { Component } from 'react'

import { Api } from '../bundles/api'

import UserList from './UserList'
import AddUser from './AddUser'

class Users extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    Api.getUsers()
    .then(res => {
      this.setState({ users: res })
    }) 
  }

  handleRowAdd = (form) => {
    let id = (Math.floor(Math.random() * 999999)).toString(36)

    let user = {
      id: id,
      ...form
    }

    let canAdd = false;
  
    if(form.name !== '' && form.email !== '') {
      this.setState(prevState => ({
        users: [...prevState.users, user]
      }))

      canAdd = true
    }
      
    return new Promise((resolve, reject) => {
      canAdd ? resolve('Added new user succedfully')
      : reject(alert('Cannot add user without name/email'))
    })
  }

  handleRowDelete = (row) => {
    let index = this.state.users.indexOf(row)

    this.setState(prevState => { 
      let newUsers = prevState.users.slice()

      newUsers.splice(index, 1) 

      return { users: newUsers } 
    })
  }

  handleRowEdit = (row) => {
    row.isEditing = true;

    this.setState({ ...this.state })
  }

  handleRowEditCancel = (row) => {
    row.isEditing = false;

    this.setState({ ...this.state })
  }

  handleRowSave = (row) => {
    row.isEditing = false

    let newUsers = this.state.users.map((user) => {
      
      if(user.id === row.id) {
        user = row
      }

      return user   
    })

    this.setState({ users: newUsers });
  }

  handleSort = (event, sortKey) => {
    const data = this.state.users;

    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))

    this.setState({ data })
  }

  render() {
    return(
      <div className="container">
        <h2 className="list_header">List of participants</h2>
        
        <AddUser
          onRowAdd={this.handleRowAdd}  
        />

        <UserList 
          users={this.state.users}
          onRowDel={this.handleRowDelete}
          onRowEdit={this.handleRowEdit}
          onRowSave={this.handleRowSave}
          onEditCancel={this.handleRowEditCancel}
          onSort={this.handleSort}
        />

      </div>
    )
  }
  
}

export default Users