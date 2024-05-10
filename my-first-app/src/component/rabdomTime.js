import React, { useState } from "react";

function Randomtime() {
  setInterval(ubpdateTime, 1000);
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function ubpdateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="Randomtime_container">
      <h1>{time}</h1>

      <button onClick={ubpdateTime} className="btn">
        get the current time
      </button>
    </div>
  );
}
export default Randomtime;

/* const animals = [
  { name: "cow", sound: "moo" },
  { name1: "cat", sound1: "mow" },
];

const [cat, mow] = animals;

const { cat, mow } = cat;


 */
