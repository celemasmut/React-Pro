import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 20,
  changes: 10,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducerFunc = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };
      case 'increaseBy':
        return {
          counter : state.counter + action.payload.value,
          changes : state.changes + 1,
          previous : state.counter,
        }

    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducerFunc, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: {value} })
  };
  return (
    <>
      <h1>Counter Reducer : {state.counter} </h1>
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
