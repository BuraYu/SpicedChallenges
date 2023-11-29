import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const validCode = "🐡🐋🐠";

  const [code, setCode] = useState("");
  // const [emo2, setEmo2] = useState("");

  function handleClick(emoji) {
    if (code.length <= 4) {
      setCode(code + emoji);
    } else {
      setCode("");
    }
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("");
        }}
      >
        Reset
      </button>
      <h2>code: {code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
