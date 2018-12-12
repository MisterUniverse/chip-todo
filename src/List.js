import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Enter Item"/>
            <button type="submit"> + </button>
          </form>
        </div>
      </div>
    );
  }
}

export default List;