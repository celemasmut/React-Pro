import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';
import { CounterHook } from './components/CounterHook';
import { CounterReducer } from './counter-reducer/CounterReducer';
//import { CounterReducer } from './components/CounterReducer';
function App() {
  return (
    <>
      <Counter initialValue={15}/>

      <CounterBy/>

      <CounterEffect/>
      <CounterEffect/>
      <CounterHook/>

      <CounterReducer/>
    </>
  );
}

export default App;
