import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <div className="top-bg">
        {" "}
        <h2>{props.name}</h2>
        <img className="img" src={props.img} alt="img-card" />
        {/*         <Avatar img={props.img} />
         */}{" "}
      </div>
      <div className="bottom-bg">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
export default Card;
