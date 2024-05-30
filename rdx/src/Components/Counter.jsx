import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../Context/features/Counter/CounterSlice";

function Counter() {
  //Read the data from the Store using useSelector
  //State is the main Store and Counter is the Reducer or Slice we created with value being the intial state
  const count = useSelector((state) => state.counter.value);

  //Changing the data using useDispatch, by sending the "actions" to the Store
  const dispatch = useDispatch();

  return (
    <div
      style={{
        margin: "2rem",
      }}
    >
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: "1rem" }}
      >
        Add
      </button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default Counter;
