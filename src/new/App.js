import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import User from './User';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import Login from "./Login";
import MenuLink from "./MenuLink";

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">用户管理系统</div>
                    </div>
                    <ul className="nav navbar-nav">
                        <MenuLink to="/home" label="主页"/>
                        <MenuLink to="/user" label="用户管理"/>
                        <MenuLink to="/profile" label="个人设置"/>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Route path="/home" component={Home}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/login" component={Login}></Route>
                        <ProtectedRoute path="/profile" component={Profile}/>
                    </div>
                </div>
            </div>
        </div>
    </Router>
) 