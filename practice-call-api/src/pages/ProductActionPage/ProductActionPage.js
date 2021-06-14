import React, { Component } from 'react'

export class ProductActionPage extends Component {
  render() {
    return (

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          
          <form>          
            <div className="form-group">
              <label>Ten san pham</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Gia san pham</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Trang thai san pham</label>
            </div>
            
            <div className="checkbox">
              <label>
                <input type="checkbox" value="" />
                con hang
              </label>
            </div>
            
          
            
          
            <button type="submit" className="btn btn-primary">Luu</button>
          </form>
          

        </div>
      </div>

    )
  }
}

export default ProductActionPage
