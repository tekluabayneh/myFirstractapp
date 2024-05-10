/* // props stands for propeerty
//the are read-only component
//it gives away to passs data from one component to other component
import React from "react";

const Fullname = (props) => {
  return (
    <div>
      <h1>
        {props.name} hello mather fucker you get that {props.age}
        {props.sex}
      </h1>
      {props.children}
    </div>
  );
};

export default Fullname;
 */

import React, { Component } from "react"; // thisis props with class component
//rfc
export default class props extends Component {
  render() {
    return (
      <div>
        <h1>
          my name {this.props.name} and iam {this.props.age}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
