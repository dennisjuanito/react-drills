import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
        input: "",
        list: []
    }

}

handleUserInput(val) {
    this.setState({
        input: val
    });
}

handleClick() {
    let newList = Object.assign([], this.state.list);
    newList.push(this.state.input);
    this.setState({
        list: newList
    });
}

  render() {
    return (
      <div className="App">
        <h1>My To-do list</h1>
        <input type="text" val={ this.state.input } onChange={ (e) => this.handleUserInput(e.target.value)} />
        <button onClick={ () => this.handleClick() }>ADD</button>
        <Todo tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;
