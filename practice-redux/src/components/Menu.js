import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
 <nav className="navbar navbar-inverse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink activeClassName="active" exact to="/">Trang chủ</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/gif">Danh sach</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">Liên hệ</NavLink>
            </li>
          </ul>
        </nav>        </div>
    );
};

export default Menu;