import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName : "",
            password : ""
        }
    }

    handleInputName(val) {
        this.setState({
            userName: val,
        });
    }

    handleInputPassword(val) {
        this.setState({
            password: val,
        });
    }

    handleUserClick() {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={ (e) => this.handleInputName(e.target.value) } value={this.state.userName} />
                <input type="text" onChange={ (e) => this.handleInputPassword(e.target.value)} value={this.state.password} />
                <button onClick={ () => this.handleUserClick()}>Login</button>
            </div>
        );
    }
}