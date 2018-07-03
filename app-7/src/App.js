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
    //this.addTask = this.addTask.bind(this);

}

addTask(newTask) {
  this.setState({
    list: [...this.state.list, newTask]
  });
}
  //the input in newtask is using arrow function must pass the input as a parameter
  //or you can also pass as this.addTask without envoking
  render() {
    return (
      <div className="App">
        <NewTask  newTask={(input) => this.addTask(input)} /> 
        <List tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;
