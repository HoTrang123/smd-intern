import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const menu = [
  {
    name: 'Trang chu',
    to: '/',
    exact: true
  },
  {
    name: 'Quan ly san pham',
    to: '/product-list',
    exact: false
  }
];

const MenuLink =({label, to, activeOnlyWhenExact}) =>{

  return(
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match})=>{
        var active = match? 'active':'';
        return(
          <li className={active}>
            <Link to={to}>
             {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

export class Menu extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a className="navbar-brand" >Call api</a>
          <ul className="nav navbar-nav">
            {this.showMenu(menu)}
          </ul>
        </div>
      </div>
    )
  }
  showMenu = (menu) =>{
    var result = null;
    if(menu.length >0){
      result = menu.map((menu, index) =>{
        return(
          <MenuLink
           key={index}
           label={menu.name}
           to={menu.to}
           activeOnlyWhenExact={menu.exact}
          />
        );
      })
    }
    return result;
  }
}

export default Menu
