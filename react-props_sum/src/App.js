import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={20} />;
}

function Sum(props) {
  return (
    <h1>
      {props.valueA} + {props.valueB} = {props.valueA + props.valueB}
    </h1>
  );
}
