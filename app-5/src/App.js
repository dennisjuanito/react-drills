import React, { Component } from 'react';
import './App.css';
import Image from "./Image.js";
//import Logo from "https://cdn.images.express.co.uk/img/dynamic/67/590x/Nemanja-Matic-981392.jpg?r=1530262720448";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image src={"https://cdn.images.express.co.uk/img/dynamic/67/590x/Nemanja-Matic-981392.jpg?r=1530262720448"} />
      </div>
    );
  }
}

export default App;
