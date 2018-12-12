import React, { Component } from 'react';
import TodoList from "./List";
import TodoItems from "./Items";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
  }

  handleInput = e => {
    console.log('Input handled!');
  }

  addItem = e => {
    e.preventDefault();
    console.log('Item successfully added!');
  }

  render() {
    return (
      <div className="App">
        <List addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
