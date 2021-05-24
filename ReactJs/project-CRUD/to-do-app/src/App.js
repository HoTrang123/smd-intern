import React, { Component } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import Sort from './components/Sort';
import Title from './components/Title';
import Item from './components/Item';
import Edit from './components/Edit';
import Items from './mockdata/Item';
import SweetAlert from 'sweetalert-react';
import './../node_modules/sweetalert/dist/sweetalert.css';

class App extends Component {
  constructor(props) {
    super(props);
    let arrayLevel = [];
    if (Items.length > 0) {
      for (let i = 0; i < Items.length; i++) {
        if (arrayLevel.indexOf(Items[i].level) === -1) {
          arrayLevel.push(Items[i].level);
        }
      }
    }
    this.state = {
      items: Items,
      showAlert: false,
      titleAlert: '',
      idAlert: '',
      indexEdit: 0,
      idEdit: '',
      nameEdit: '',
      levelEdit: 0
    }
  }

  handleEditItem = (index, item) => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      levelEdit: item.level
    });
  }

  handleDeleteItem = () => {
    let { idAlert, items } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
    }
    this.setState({
      showAlert: false
    })
  }

  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item.id
    });
  }

  renderItem = () => {
    let { items, idEdit, indexEdit, nameEdit, levelEdit } = this.state;
    if (items.length === 0) {
      return <Item item={0} />
    }

    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <Edit
            key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
          />
        )
      }

      return (
        <Item
          item={item}
          key={index}
          index={index}
          handleShowAlert={this.handleShowAlert}
          handleEditItem={this.handleEditItem}
        />
      )
    });
  }

  render() {
    return (
      <div className="container">
        <SweetAlert
          show={this.state.showAlert}
          title="Delete Item"
          text={this.state.titleAlert}
          showCancelButton
          onOutsideClick={() => this.setState({ showAlert: false })}
          onEscapeKey={() => this.setState({ showAlert: false })}
          onCancel={() => this.setState({ showAlert: false })}
          onConfirm={() => this.handleDeleteItem}
        />
        <Title />
        <div className="row">
          <Search />
          <Sort />
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button type="button" className="btn btn-info btn-block marginB10">Add Item</button>
          </div>
        </div>
        <div className="row marginB10">
          <Form />
        </div>
        <div className="panel panel-success">
          <div className="panel-heading">List Item</div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: '10%' }} className="text-center">#</th>
                <th>Name</th>
                <th style={{ width: '15%' }} className="text-center">Level</th>
                <th style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItem()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;