// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

const fname = "Seoyeon";
const lname = "Chang";

ReactDOM.render(
  <div>
    <h1 contentEditable="true" spellCheck="false">
      Hello {fname + " " + lname}
    </h1>
    <div>
      <img
        className="cat-img"
        alt="cute cat"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
      />
      <img
        className="cat-img"
        alt="cute cat"
        src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
      />
    </div>
  </div>,
  document.getElementById("root")
);
