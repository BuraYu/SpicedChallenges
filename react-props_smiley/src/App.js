import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley(props) {
  return <h1>{props.isHappy ? ":)" : ":("}</h1>;
}
