export default function Counter({ come, go, ppl }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={come}
        >
          +
        </button>
        <h2>There are {ppl} coming</h2>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={go}
        >
          -
        </button>
      </div>
    </>
  );
}
