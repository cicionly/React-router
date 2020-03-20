import React from 'react';
export default class UserAdd extends React.Component {
    handleSubmit = (event)=>{
        event.preventDefault();
        let users = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
        users.push({id:(new Date()).getTime(),name:this.name.value});
        localStorage.setItem("users",JSON.stringify(users));
        this.props.history.push("/user/userList");
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">姓名：</label>
                <input type="text" ref={ref=>this.name=ref} className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="submit"></label>
                <input type="submit" className="btn btn-primary" />
            </div>
        </form>
    }
}