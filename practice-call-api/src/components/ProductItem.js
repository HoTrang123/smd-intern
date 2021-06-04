import React, { Component } from 'react'

export class ProductItem extends Component {
  render() {
    var {product, index} = this.props;
    var productStatusName = product.status?'Con hang':'Het hang';
    var productStatusClass = product.status? 'warning':'default';
    return (
      <div>
        <tr>
          <td>{index +1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>   
            <span className={`label label-${productStatusClass}`}>{productStatusName}</span>
          </td>
          <td>
            <button type="button" className="btn btn-success mr-5">sua</button>
            <button type="button" className="btn btn-danger">xoa</button>
          </td>

        </tr>
   
      </div>
    )
  }
}

export default ProductItem
