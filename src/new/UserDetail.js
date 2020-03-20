import React from 'react';

export default class UserDetail extends React.Component{
    render(){
        let data = localStorage.getItem("users");
        let users = data ? JSON.parse(data) : [];
        let user = users.find(user=>user.id==this.props.match.params.id);
        return <table className="table">
            <thead>
                <tr>
                    <td>姓名</td>
                    <td>ID</td>
                </tr>
            </thead>
            <thead>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.id}</td>
                </tr>
            </thead>
        </table>
    }
}