import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      firstName: "",
      lastName: "",
      gender: 1,
      age: 20,
      result: { status: 0, message: "Please submit data." }
    };
  }

  submitUserData = () => {
    axios
      .post("http://localhost:8080/users", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        age: this.state.age
      })
      .then(response => {
        console.log(response);
        this.setState({ result: { status: 1, message: "Success!" } });
      })
      .catch(error => {
        console.log(error);
        this.setState({ result: { status: 2, message: "Error!" } });
      });
  };

  handleFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  handleLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  handleGenderChange = e => {
    this.setState({ gender: e.target.value });
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value });
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
            <form name="userDataForm">
              <div className="row">
                <div className="col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                  />
                </div>
                <div className="col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="custom-select d-block w-100"
                    name="gender"
                    id="gender"
                    value={this.state.gender}
                    onChange={this.handleGenderChange}
                  >
                    <option value="1">Man</option>
                    <option value="2">Woman</option>
                    <option value="3">Other</option>
                  </select>
                </div>
                <div className="col">
                  <label htmlFor="age">Age</label>
                  <input
                    className="form-control"
                    type="number"
                    name="age"
                    id="age"
                    value={this.state.age}
                    onChange={this.handleAgeChange}
                  />
                </div>
              </div>
              <hr className="mb-4" />
              <button
                className="btn btn-primary btn-lg btn-block"
                type="button"
                onClick={this.submitUserData}
              >
                submit
              </button>
            </form>
            <div className={this.switchAlertState(this.state.result.status)}>
              {this.state.result.message}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;
