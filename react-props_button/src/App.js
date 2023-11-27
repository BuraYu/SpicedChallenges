import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Click");
  }

  return (
    <Button
      color="blue"
      disable={false}
      text="knopf lol"
      onClick={handleClick}
    />
  );
}

function Button(props) {
  if (props.disable) {
    return (
      <button color={props.color} disabled={props.disable}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button
        color={props.color}
        disabled={props.disable}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  }
}
