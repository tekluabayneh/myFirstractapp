import React from "react";
/* const Jxs = () => {
  return (
    <div>
      <h1>hello {name} welcome to react component</h1>
      <p>my lukcy number si {number}</p>
      <p>my first name is {`${first} ${last}`}</p>
      <ul>
        <li>food</li>
        <li>water</li>
        <li>shilter</li>
      </ul>
    </div>
  ); */ // this is the beter one
/* return React.createElement(
    "div",
    { id: "welcome", className: "classwel" },

    React.createElement("hr"),
    React.createElement("h1", null, "this is it")
  ); */
/* };
export default Jxs;
const name = "teklu"; // we can write variable and use it
const number = "12";
const first = "teklu";
const last = "abay";
 */

/* const should = () => {
  return (
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="true">
        Hello world
      </h1>
      <p>created by {name}</p>

      <p>created by {`${name}`}</p>
      <p>copy write {`${new Date(2020, 3, 4).getFullYear()}`}</p>
    
    </div>
  );
};
const name = "teklu";
const num = Math.floor(Math.random() * 1920); 

export default should;
 */
const bojstyle = {
  color: "orangered",
  fontSaize: "2rem",
  border: "11px solid red",
};

bojstyle.border = "2px dashed purple"; // this is updating

const Fullnavbar = () => {
  return (
    <div>
      <header className="wraper">
        <div className="logo">teklu</div>
        <div>
          <ul>
            <li style={{ color: "purple" }}>home</li>
            <li style={bojstyle}>about</li>
            <li style={{ border: "2px solid red" }}>contuct</li>
          </ul>
          <ul>
            <li style={bojstyle}>this is me and my fraind</li>
            <li style={{ background: "aqua" }}>name</li>
            {/* this is inline  style */}
            <li style={{ color: "red" }}>age</li>
            <li>gender</li>
            <img src={"logo192.png" + "?grayscale"} />
            {/* we can nsert image like this */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Fullnavbar;

function Nameandlastname() {
  return 12 * 2;
}
function Nameandfirst() {
  return 1 + 1;
}
function teklu() {
  Nameandfirst();
}
export { Nameandfirst, Nameandlastname, teklu };
