import React, { Component } from 'react'
import ProductList from './../../components/ProductList'
import ProductItem from './../../components/ProductItem'
import { connect } from 'react-redux'

export class ProductListPage extends Component {
  render() {
    var { products } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs- col-sm- col-md- col-lg-">
            <button type="button" className="btn btn-info mb-10">Them san pham</button>
            <ProductList>
              {/* {this.showProducts(products)} */}
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>

              </tr>
            </ProductList>
          </div>
        </div>
      </div>
    )
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem key={index} product={product} index={index} />
        )

      })
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductListPage);
