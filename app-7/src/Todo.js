import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <span>
                 {this.props.task} <br/>
            </span>
           
        );
    }
}