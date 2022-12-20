import React, { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState();
  const [name, setName] = useState("");

  function handleChange(event) {
    // console.log(event.target.value, name);
    setName(event.target.value);
  }

  function handleClick(event) {
    // console.log(name);
    setGreeting(name);

    event.preventDefault(); //prevent default behavior of submit(refreshing)
  }

  return (
    <div className="container">
      <h1> Hello {greeting} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
