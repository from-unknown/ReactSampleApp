import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

class ToolBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/list">User List</Link>&nbsp;
          <Link to="/create">Create User</Link>
          <Route path="/list" component={UserList} />
          <Route path="/create" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default ToolBar;
