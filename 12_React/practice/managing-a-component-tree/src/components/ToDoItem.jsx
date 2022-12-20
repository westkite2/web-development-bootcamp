import React from "react";

function ToDoItem(props) {
  /*
  const [isCrossed, setIsCrossed] = useState(false);

  function handleClick() {
    setIsCrossed((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isCrossed ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
  */

  return (
    <div
      onClick={() => {
        props.isChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
