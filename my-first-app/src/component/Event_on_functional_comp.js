//RFCE
import React, { Component } from "react";

export default class Event_on_functional_comp extends Component {
  render() {
    function handler() {
      alert("btn clicked");
    }
    return (
      <div>
        <button onClick={handler}>click me</button>
      </div>
    );
  }
}
