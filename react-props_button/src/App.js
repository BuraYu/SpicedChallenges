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
    return <button disabled={props.disable}>{props.text}</button>;
  } else {
    return (
      <button
        style={{
          height: "75px",
          width: "200px",
          color: props.color,
          fontSize: "36px",
        }}
        disabled={props.disable}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  }
}
