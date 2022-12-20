import React, { useState } from "react";

function App() {
  var [time, setTime] = useState("TIME");

  setInterval(updateTime, 1000);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime((time = newTime));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
