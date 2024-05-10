import React, { useState } from "react";
import TDTEXTITEM from "./TO_DO_comp";
function To_doList() {
  const [inputText, setInputText] = useState("");
  const [ToDitems, setTdItems] = useState([]);

  function ChangeHandler(event) {
    const newvalue = event.target.value;
    setInputText(newvalue);
  }

  function AddItem() {
    setTdItems((prevItems) => {
      return [...prevItems, ...inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setTdItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="TO_boass_container">
      <div className="To_Do-app-container">
        <div className="heding">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input type="text" onChange={ChangeHandler} value={inputText} />

          <button onClick={AddItem}>
            <span>Add</span>
          </button>
        </div>
        <div className="Li-item">
          <ul>
            {ToDitems.map((item, index) => (
              <TDTEXTITEM
                key={index}
                id={index}
                text={ToDitems}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default To_doList;

