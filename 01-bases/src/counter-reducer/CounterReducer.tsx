import { useReducer } from "react";
import * as CounterActions from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducerFunc } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 20,
  changes: 10,
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducerFunc, INITIAL_STATE);

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(CounterActions.doIncreseBy(value));
  };
  return (
    <>
      <h1>Counter Reducer Segmentado : {state.counter} </h1>
      <pre>
        { JSON.stringify( state, null, 2)}
      </pre>
      <button onClick={handleReset}> Reset </button>
      <button onClick={() => handleIncreaseBy(1)}> + 1 </button>
      <button onClick={() => handleIncreaseBy(5)}> + 5 </button>
      <button onClick={() => handleIncreaseBy(10)}> + 10 </button>
    </>
  );
};
