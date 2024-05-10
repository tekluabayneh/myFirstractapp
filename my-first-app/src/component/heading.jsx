import React from "react";
import { Nameandfirst, Nameandlastname,teklu } from "./Jsx";
const bojstyle = {
  color: "orangered",
  fontSaize: "2rem",
  border: "11px solid red",
};

bojstyle.border = "2px dashed purple"; // this is updating

const Fullnavbar1 = () => {
  return (
    <div>
      <header className="wraper">
        <div className="logo">teklu</div>
        <div>
          <ul>
            <li>{Nameandlastname()}</li>
            <li>{Nameandfirst()}</li>
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
            <img alt="logo" src={"logo192.png" + "?grayscale"} />{" "}
            {/* we can nsert image like this */}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Fullnavbar1;
