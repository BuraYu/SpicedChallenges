import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Knopf</Button>
      <Button>Button</Button>
      <Button>Dügme</Button>
      <Button>단추</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
