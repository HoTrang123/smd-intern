import React, { Component } from 'react'

export class Edit extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.indexEdit}</td>
        <td>
          <input
            type="text" className="form-control"
            value={this.props.nameEdit}
          />
        </td>
        <td className="text-center">
          <select className="form-control">
            <option>Small</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </td>
        <td>
          <button type="button" className="btn btn-default btn-sm">Cancel</button>
          <button type="button" className="btn btn-success btn-sm">Save</button>
        </td>
      </tr>
    )
  }
}

export default Edit
