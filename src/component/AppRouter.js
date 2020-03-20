import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';

export default (
    <Router>
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">用户管理系统</div>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">主页</Link></li>
                        <li><Link to="/user">用户管理</Link></li>
                        <li><Link to="/profile">个人设置</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Switch>
                            <Route path="/" exact render={props=><div>首页</div>}></Route>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/profile' component={Profile}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)
