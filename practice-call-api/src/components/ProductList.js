import React, { Component } from 'react'

export class ProductList extends Component {

  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sach san pham</h3>
          </div>
          <div className="panel-body">

            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ma sp</th>
                  <th>Ten</th>
                  <th>Gia</th>
                  <th>Trang thai</th>
                  <th>Hanh dong</th>
                </tr>
              </thead>
              <tbody>
                {this.props.childrenl}
              </tbody>
            </table>

          </div>
        </div>

      </div>
    )
  }
}

export default ProductList
