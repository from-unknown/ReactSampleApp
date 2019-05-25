import React, {Component} from 'react';

class UserList extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            users: []
        };
    }

    getUsersData(callback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onloadend = function() {
            if (this.status === 200) {
                const users = JSON.parse(this.responseText);
                callback(users);
            }
        };
        xhttp.open("GET", "http://localhost:8080/users", true);
        xhttp.send();
    }

    componentDidMount() {
        this.getUsersData((users)=> {
            this.setState({
                users
            });
        })
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
