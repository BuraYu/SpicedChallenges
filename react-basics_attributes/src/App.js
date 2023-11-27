import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Article />
    </>
  );
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Random article from Wiki</h2>
      <label htmlFor="">
        <input type="text" name="" id="" />
      </label>
      <a
        href="https://en.wikipedia.org/wiki/Special:Random"
        className="article__link"
      >
        Here is the link
      </a>
    </article>
  );
}
