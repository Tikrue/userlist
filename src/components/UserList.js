import React from 'react'

import UserRow from './UserRow'
import EditRow from './EditRow'

const columns = ['name', 'email', 'phone']

const UserList = (props) => {

  return(
    <table className="user_table">
      <thead>
        <tr className="header_row">
          <th 
            className="user_prop_header" 
            onClick={e => props.onSort(e, 'name')}
          >
            <p>Name</p>
          </th>

          <th 
            className="user_prop_header" 
            onClick={e => props.onSort(e, 'email')}
          >
            <p>E-mail address</p>
          </th>

          <th 
            className="user_prop_header" 
            onClick={e => props.onSort(e, 'phone')}
          >
            <p>Phone number</p>
          </th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        {props.users.map((user) => {
          if(!user.isEditing) {
            return <UserRow
              user={user}
              key={user.id}
              columns={columns}
              onRowEdit={() => props.onRowEdit(user)}
              onRowDel={() => props.onRowDel(user)}
            />
          }
          else {
            return <EditRow
              user={user}
              key={user.id}
              columns={columns}
              onRowSave={props.onRowSave}
              onEditCancel={() => props.onEditCancel(user)}
            />  
          }   
        })}

      </tbody>
    </table> 
  )
  
}

export default UserList