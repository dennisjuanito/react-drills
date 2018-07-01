import React, { Component } from 'react';

class NewTask extends Component {
  constructor() {
    super();
    this.state = {
        input: "",
    }

}

handleUserInput(val) {
    this.setState({
        input: val
    });
}

handleClick() {
    this.props.newTask(this.state.input);
    this.setState({input: ""});
}

  render() {
    return (
      <div>
        <h1>My To-do list</h1>
        <input type="text" value={ this.state.input } onChange={ (e) => this.handleUserInput(e.target.value)} />
        <button onClick={ () => this.handleClick() }>ADD</button>
      </div>
    );
  }
}

export default NewTask;
