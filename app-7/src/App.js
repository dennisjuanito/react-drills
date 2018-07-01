import React, { Component } from 'react';
import './App.css';
import List from "./List.js";
import NewTask from "./NewTask.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
        list: []
    }
    this.addTask = this.addTask.bind(this);

}

addTask(newTask) {
  this.setState({
    list: [...this.state.list, newTask]
  });
}

  render() {
    return (
      <div className="App">
        <NewTask  newTask={this.addTask} />
        <List tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;
