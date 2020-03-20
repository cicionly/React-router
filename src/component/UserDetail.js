import React from 'react';
export default class UserDetail extends React.Component {
    render() {
        let id = this.props.match.params.id;
        console.log(id);
        let users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
        let user = users.find(user => user.id == id);
        console.log(user);
        return <table className="table table-responsive">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>姓名</td>
                </tr>
            </thead>
            <thead>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                </tr>
            </thead>
        </table>
    }
}