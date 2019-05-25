import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserList from "./UserList";

class ToolBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/list">User List</Link>
          <Route path="/list" component={UserList} />
        </div>
      </Router>
    );
  }
}

export default ToolBar;
