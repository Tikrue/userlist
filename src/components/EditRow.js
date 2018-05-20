import React, { Component } from 'react'

class EditRow extends Component {
  state = {
    ...this.props.user
  }

  handleChange = (event) => {
    event.preventDefault()
    
    this.setState({ [event.currentTarget.name]: event.target.value })
  }

  handleSave = (event) => {
    this.props.onRowSave(this.state)
  }

  render() {
    const { onEditCancel, columns } = this.props
    return(
      <tr className="user_row">

        {columns.map((val) => {
          return <td key={val} class="user_props_column">
            <input
              className="user_input"
              name={val} 
              value={this.state[val]}
              onChange={this.handleChange}
            />
          </td> 
        })} 

      <td className="user_props_column">
        <button 
          className="btn"
          onClick={onEditCancel}
        >
          Cancel
        </button>

        <button 
          className="btn"
          onClick={this.handleSave}
        >
          Save
        </button>
      </td>
    </tr>
    )
  }
}

export default EditRow