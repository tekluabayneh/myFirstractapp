import React, { Component } from "react";

export default class Event_on_class extends Component {
  Click_handler() {
    console.log("btn clicked");
    alert("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.Click_handler}>click</button>
      </div>
    );
  }
}
