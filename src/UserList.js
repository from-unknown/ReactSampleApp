import React, {Component} from 'react';
import axios from 'axios';

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
            <table>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>gender</th>
                    <th>age</th>
                </tr>
                {this.state.users.map(user => {
                    return (<tr>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td
                        >
                    </tr>);
                })}
                </tbody>
            </table>
        );
    }
}

export default UserList;
