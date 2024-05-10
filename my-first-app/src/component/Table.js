import React from "react";
import Card from "./card";
import Cars from "./Table_comp";
console.log(Cars);

const [bmw, Tesla] = Cars;

const {
  speedStuts: { Topspeed: bmwTopSpeed },
} = bmw;

const {
  speedStuts: { Topspeed: tesalTopSpeed },
} = Tesla;

const {
  colorsBypopulaity: [bmwtopcolor],
} = bmw;
const {
  colorsBypopulaity: [teslatopcolor],
} = Tesla;

console.log(bmw);
function Table() {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>mode</th>
            <th>top speed</th>
            <th>color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bmw.model}</td>
            <td>{bmwTopSpeed}</td>
            <td>{bmwtopcolor}</td>
          </tr>

          <tr>
            <td>{Tesla.model}</td>
            <td>{tesalTopSpeed}</td>
            <td>{teslatopcolor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
