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
      result: "Please submit data."
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
        this.setState({ result: "Success!" });
      })
      .catch(error => {
        console.log(error);
        this.setState({ result: "Error!" });
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

  render() {
    return (
      <div>
        <form name="userDataForm">
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <br />
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
          <br />
          Gender:
          <select
            name="gender"
            value={this.state.gender}
            onChange={this.handleGenderChange}
          >
            <option value="1">Man</option>
            <option value="2">Woman</option>
            <option value="3">Other</option>
          </select>
          <br />
          age:
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
          <br />
          <button type="button" onClick={this.submitUserData}>
            submit
          </button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default CreateUser;
