import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      user: null,
      result: { status: 0, message: "Please enter ID." }
    };
  }

  handleIdChange = e => {
    this.setState({ id: e.target.value });
  };

  searchUserData = () => {
    axios
      .get("http://localhost:8080/user/" + this.state.id)
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data,
          result: { status: 1, message: "Success!" }
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ result: { status: 2, message: "Error!" } });
      });
  };

  switchAlertState = status => {
    switch (status) {
      case 0:
        return "alert alert-primary";
      case 1:
        return "alert alert-success";
      case 2:
        return "alert alert-danger";
      default:
        return "alert alert-primary";
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="id">ID</label>
                  <input
                    className="form-control"
                    type="number"
                    name="id"
                    id="id"
                    onChange={this.handleIdChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <hr className="md-4" />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="button"
                    onClick={this.searchUserData}
                  >
                    Search
                  </button>
                  <div
                    className={this.switchAlertState(this.state.result.status)}
                  >
                    {this.state.result.message}
                  </div>
                </div>
              </div>
            </form>
            {this.state.user && (
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
                  <tr>
                    <th scope="col">{this.state.user.id}</th>
                    <td>{this.state.user.firstName}</td>
                    <td>{this.state.user.lastName}</td>
                    <td>{this.state.user.gender}</td>
                    <td>{this.state.user.age}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchUser;
