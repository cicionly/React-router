import React from 'react';
import { Link, } from 'react-router-dom';

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentWillMount() {
        let data = JSON.parse(localStorage.getItem("users"));
        let users = data ? data : [];
        this.setState({ users });
    }
    render() {
        return <ul className="list-group">
            {this.state.users.map((user,index)=>{
                return <li key={index} className="list-group-item">
                <Link to={"/user/userDetail/"+user.id}>{user.name}</Link>
                </li>
            })}
        </ul>
    }
}