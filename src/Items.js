import React, { Component } from "react";

class Items extends Component {
  createItems = item => {
    return (
      <li key={item.key}>
        {item.text}
      </li>
    );
  };
  render() {
    const todoData = this.props.data;
    const listItems = todoData.map(this.createItems);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default TodoItems;