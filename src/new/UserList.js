import React from 'react';
import { Link } from "react-router-dom";

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        let data = localStorage.getItem("users");
        let users = data ? JSON.parse(data) : [];
        this.setState({ users });
    }
    render() {
        return <ul className="list-group">
            {this.state.users.map((user, index) => (
                <li className="list-group-item" key={index}>
                    <Link to={"/user/userDetail/"+user.id}>{user.name}</Link>
                </li>
            ))}
        </ul>
    }
}