import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import SearchUser from "./SearchUser";
import "bootstrap/dist/css/bootstrap.css";

class ToolBar extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/list">
                User List
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/create">
                Create User
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/search">
                Search User
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route path="/list" component={UserList} />
          <Route path="/create" component={CreateUser} />
          <Route path="/search" component={SearchUser} />
        </div>
      </Router>
    );
  }
}

export default ToolBar;
