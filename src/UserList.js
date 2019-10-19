import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class UserList extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/users").then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    return (
      <div className="component">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">first name</th>
                  <th scope="col">last name</th>
                  <th scope="col">gender</th>
                  <th scope="col">age</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => {
                  return (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.gender}</td>
                      <td>{user.age}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
