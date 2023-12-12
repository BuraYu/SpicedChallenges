import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);
  let [capacity, setCapacity] = useState(100);

  function handleGoers() {
    if (people > 0) {
      setPeople(() => people - 1);
      setCapacity(() => capacity + 1);
    } else {
      console.log("Either come or go");
    }
  }

  function handleComers() {
    if (capacity > 0) {
      setCapacity(() => capacity - 1);
      setPeople(() => people + 1);
    } else {
      console.log("we are full, go to McDonalds");
    }
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter come={handleComers} go={handleGoers} ppl={people} />
      <p>Right now we have {capacity} free space</p>
    </div>
  );
}
