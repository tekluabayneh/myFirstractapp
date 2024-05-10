//RCE
// the state is an updatable structure that is used is to contain data or nformation about the component
// the state in a component chane over time
// a component with the state is known as statefull component
import React, { Component } from "react";

export class Subscribe extends Component {
  //rco to open constructor
  constructor() {
    super();

    this.state = {
      chanale: "name",
    };
  }
  //function
  changeMesssage() {
    this.setState({
      chanale: "thanks for being our family",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.chanale}</h1>
        <button onClick={() => this.changeMesssage()}>subscribe</button>
      </div>
    );
  }
}

export default Subscribe;

