import React from 'react';
import { Prompt } from 'react-router-dom';

export default class UserAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            blocking: false
        }
    }
    handleChange = (event) => {
        this.setState({ blocking: event.target.value && event.target.value.length > 0 });
    }

    handleSubmit = () => {
        let data = localStorage.getItem("users");
        let users = data ? JSON.parse(data) : [];
        users.push({ id: (new Date()).getTime(), name: this.name.value });
        localStorage.setItem("users", JSON.stringify(users));
        this.setState({blocking:false},()=>{this.props.history.push("/user/userList");})
    }

    render() {
        return <div>
            <Prompt when={this.state.blocking} message="请问确定跳转吗"/>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">姓名：</label>
                    <input type="text" onChange={this.handleChange} ref={xx => this.name = xx} className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    }
}