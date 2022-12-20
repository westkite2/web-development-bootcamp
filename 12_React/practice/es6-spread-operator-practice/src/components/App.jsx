import React, { useState } from "react";

function App() {
  const [newitem, setNewItem] = useState("");
  const [itemArray, setItemArray] = useState([]);

  function handleChange(event) {
    setNewItem(event.target.value);
    console.log(newitem);
  }

  function handleClick() {
    setItemArray((prevValue) => {
      return [...prevValue, newitem];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newitem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((eachItem) => (
            <li>{eachItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
