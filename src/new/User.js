import React from 'react';
import { Route, Link } from "react-router-dom";
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";

export default class User extends React.Component {
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <div className="nav nav-stacked">
                        <ul className="nav navbar-nav">
                            <li><Link to="/user/userList">用户列表</Link></li>
                            <li><Link to="/user/userAdd">新增用户</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-10">
                    <Route path="/user/userAdd" component={UserAdd}></Route>
                    <Route path="/user/userList" component={UserList}></Route>
                    <Route path="/user/userDetail/:id" component={UserDetail}></Route>
                </div>
            </div>
        </div>
    }
}