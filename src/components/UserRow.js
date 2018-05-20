import React from 'react'

const UserRow = (props) => {
  
  return(
    <tr className="user_row">

      {props.columns.map((val) => {
        return <td key={val} className="user_prop_column">
          <p className="user_prop">{props.user[val]}</p>
        </td> 
      })} 

      <td className="btn_wrapper">
        <span className="edit material-icons" onClick={props.onRowEdit}>edit</span>
        <span className="delete material-icons" onClick={props.onRowDel}>delete</span>
      </td>
    </tr>
  )
    
}

export default UserRow