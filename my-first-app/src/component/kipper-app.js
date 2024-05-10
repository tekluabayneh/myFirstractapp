import React from "react";
import props from "./props";
const date = new Date();
let curentTime = date.getFullYear(1998, 12, 12);
const Kipper = (props) => {
  return (
    <div>
      <header className="header">Kipper</header>

      <section className="para">
        <p>{props.title}</p>
        <p>{props.paragraph}</p>
      </section>
      <footer className="footer">copy write {curentTime}</footer>
    </div>
  );
};
export default Kipper;
