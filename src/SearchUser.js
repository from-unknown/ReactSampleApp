import React, { Component } from "react";
import axios from "axios";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = { id: null, user: null, result: "Please enter ID." };
  }

  handleIdChange = e => {
    this.setState({ id: e.target.value });
  };

  searchUserData = () => {
    axios
      .get("http://localhost:8080/user/" + this.state.id)
      .then(response => {
        console.log(response);
        this.setState({ user: response.data, result: "Success!" });
      })
      .catch(error => {
        console.log(error);
        this.setState({ result: "Error!" });
      });
  };

  render() {
    return (
      <div>
        <form>
          <input type="number" name="id" onChange={this.handleIdChange} />
          <button type="button" onClick={this.searchUserData}>
            search
          </button>
        </form>
        <div>{this.state.result}</div>
        {this.state.user && (
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>first name</th>
                <th>last name</th>
                <th>gender</th>
                <th>age</th>
              </tr>
              <tr>
                <td>{this.state.user.id}</td>
                <td>{this.state.user.firstName}</td>
                <td>{this.state.user.lastName}</td>
                <td>{this.state.user.gender}</td>
                <td>{this.state.user.age}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default SearchUser;
