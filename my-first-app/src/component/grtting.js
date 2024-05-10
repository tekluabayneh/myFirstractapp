import React from "react";
const date = new Date(12, 12, 4, 13);
const curenttime = date.getHours();

let gretting;
const customstyle = {
  color: " ",
};

if (curenttime < 12) {
  gretting = "good morning";
  customstyle.color = "green";
} else if (curenttime > 12) {
  gretting = "good evning";
  customstyle.color = "red";
} else {
  gretting = "good night";
  customstyle.color = "blue";
}

const Getname = () => {
  return (
    <div>
      <h1 className="getheading" style={customstyle}>
        {gretting}
      </h1>
      ;
    </div>
  );
};

export default Getname;
