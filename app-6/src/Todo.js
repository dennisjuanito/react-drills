import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        let list = this.props.tasks.map((element, i) => {
            return (
                <span key={ i }>{ element }<br/></span>
            );      
        });
        return (
            <div>
                 {list}
            </div>
           
        );
    }
}