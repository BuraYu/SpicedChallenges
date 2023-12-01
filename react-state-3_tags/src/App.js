import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag({ newTag }) {
    console.log(newTag);
    setTags([...tags, newTag]);
  }

  return (
    <main className="app">
      <Form handleAddTag={handleAddTag} />
      <List tags={tags} />
    </main>
  );
}
