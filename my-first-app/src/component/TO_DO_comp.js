import React, { useState } from "react";
function TDTEXTITEM(props) {
  /*   const [isdon, setisdon] = useState(false); */

  function Listner() {
    /*  setisdon((prevValue) => {
      return !prevValue;
    }); */
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* Listner */}
      {/*       <li style={{ textDecoration: isdon ? "line-through" : "none" }}>

 */}
      <li> {props.text}</li>
    </div>
  );
}
export default TDTEXTITEM;
