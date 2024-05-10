import React from "react";

function Fancycard(props) {
  return (
    <div className="fancy-wrapper">
      <div className="container">
        <img src={props.img} alt="imogy" />
        <h1 className="head">{props.heading}</h1>
        <p className="para_fancy">{props.paragraph}</p>
      </div>
    </div>
  );
}
export default Fancycard;
